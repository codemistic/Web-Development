import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

// styling
import "../styles/Book.scss";

// Getting request
const Book = ({theme}) => {
  const params = useParams();
  const { data: book, isLoading, isError, } = useQuery(["book"], () => {
    return fetch(`http://127.0.0.1:8000/book/${params.id}`).then((t) =>t.json()
    );
  });
  const { data: bookInstances } = useQuery(["bookInstance"], () => {
    return fetch(`http://127.0.0.1:8000/book/instance/${params.id}/`).then((t) =>t.json()
    );
  });

  if (isLoading) return ( <div className="Loading"> <ReactLoading /> </div>);

  if (isError) return <h1>Error with request</h1>;

  function status_color(status) {
    if(status === "Available"){
      return <p style={{color:"blue"}}>{status}</p>
    } else if (status === "Maintenance") {
      return <p style={{color:"yellow"}}>{status}</p>
    }
    else {
      return <p style={{color:"red"}}>{status}</p>
    }
  }

  return (
    <div className="Book_container">
      <div>
        <Navigation />
      </div>
      <div className={`Book_div ${theme}`}>
        <div>
          <h1> Book :&nbsp; <p>{book.title}</p></h1>
          <strong> Author:&nbsp; <p>{book.author}</p></strong>
          <strong> Summary: &nbsp; <p>{book.summary}</p></strong>
          <strong> ISBN: &nbsp; <p>{book.isbn}</p></strong>
          <strong> Genre: &nbsp; <p>{book.genre[0].name}</p></strong>
        </div>
        <div>
          <h1>Copies</h1>
          <div>
            {bookInstances?.map((bookInstance) => {
              return (
                <div className={`bookInstance_container ${theme}`} key={bookInstance.id}>
                  <hr />
                  <strong>Copy Status: &nbsp; {status_color(bookInstance.status)} </strong>
                  {bookInstance.due_back && <strong>Due to returned: &nbsp; <p>{bookInstance.due_back}</p></strong>}
                  <strong>Imprint: &nbsp; <p>{bookInstance.imprint}</p> </strong>
                  <strong>Id: &nbsp; <p>{bookInstance.id}</p> </strong>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
