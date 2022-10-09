import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

// Styles
import "../styles/AllAuthors.scss";

// Getting request
const AllAuthors = ({ theme }) => {
  const { data: authors, isLoading, isError, } = useQuery(["authors"], () => {
    return fetch("http://127.0.0.1:8000/authors/").then((t) => t.json());
  });

  if (isLoading)
    return ( <div className="Loading"> <ReactLoading /> </div> );

  if (isError) return <h1>Error with request</h1>;

  return (
    <div className="AllAuthors_container">
      <div> <Navigation /> </div>
      <div>
        <h1>All Authors</h1>
        <div>
          {authors.map((author) => {
            return (
              <div className={`AllAuthor_author-name ${theme}`} key={author.id}>
                <ul>
                  <Link to={"/Author/" + author.id}>
                    <li> <p> {author.first_name} {author.last_name} </p> </li>
                  </Link>
                  <p className="author_dob"> &nbsp; ({author.date_of_birth} -
                    <i style={{ color: "red" }}>to</i>{" "}{author.date_of_death ? "💀" + author.date_of_death : " 😃"})
                  </p>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
