import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
// import Pages from './Pages';

// Styles
import "../styles/AllBooks.scss";
import { useState } from "react";

// Getting request
const AllBooks = ({ theme }) => {
  const [id, setId] = useState("http://127.0.0.1:8000/ApiBooksListView/");

  const { data: books, isLoading, isError, } = useQuery(["books", id], () => {
    return fetch(id).then((t) => t.json());
  });

  if (isLoading)
    return ( <div className="Loading"> <ReactLoading /> </div>);

  if (isError) return <h1>Error with request</h1>;

  return (
    <div className="AllBooks_container">
      <div> <Navigation /> </div>
      <div>
        <h1>All Books</h1>
        <div>
          {books.results?.map((book) => {
            return (
              <div className={`book_detail-container ${theme}`} key={book.id}>
                <ul>
                  <Link to={"/Book/" + book.id}>
                    <li> <p className="books_title_p">{book.title}&nbsp;</p> </li>
                  </Link>
                  <p className="book_author-name">&nbsp;({book.author})</p>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="book_detail-pagination">
          {books.previous ? ( <button onClick={() => setId(books.previous)}>Previos</button>) : (
            <button style={{ background: "rgba(135, 207, 235, 0.5)", border: "1px solid black" }}>
              Previos
            </button> )}
          {books.next ? (<button onClick={() => setId(books.next)}>Next</button>) : (
            <button style={{ background: "rgba(135, 207, 235, 0.5)", border: "1px solid black" }}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
