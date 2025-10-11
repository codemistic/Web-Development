import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

// styling
import "../styles/Author.scss";

// Getting request
const Author = () => {
  const params = useParams();

  const { data: author, isLoading, isError, } = useQuery(["author"], () => {
    return fetch(`http://127.0.0.1:8000/author/${params.id}`).then( (t) => t.json());
  });

  const { data: authorBooks } = useQuery(["authorBooks"], () => {
    return fetch(`http://127.0.0.1:8000/author/books/${params.id}`).then((t) => t.json());
  });

  if (isLoading)
    return ( <div className="Loading"> <ReactLoading /> </div>);

  if (isError) return <h1>Error with request</h1>;

  return (
    <div className="Author_continer">
      <div> <Navigation /> </div>
      <div className="Author_div">
        <h1> Author: {author.first_name} {author.last_name} </h1>
        <p>
          {author.date_of_birth} <i style={{ color: "red" }}>to</i>{" "}
          {author.date_of_death ? "💀" + author.date_of_death : "😃"}
        </p>
        <h2>Books</h2>
        <div>
          {authorBooks?.map((authorBook) => {
            return (
              <div className="author_list-container" key={authorBook.id}>
                <ul>
                  <Link to={"/Book/" + authorBook.id}>
                    <li> <p>{authorBook.title}</p> </li>
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Author;
