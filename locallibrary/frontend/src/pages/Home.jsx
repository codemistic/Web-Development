import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from 'react-loading';

// Styles
import "../styles/Home.scss";

// Getting request 
const Home = ({theme}) => {
  const { data: libraries, isLoading, isError,} = useQuery(["libraries"], () => {
    return fetch("http://127.0.0.1:8000/detail").then((t) => t.json());
  });

  if (isLoading) return <div className="Loading" ><ReactLoading /></div>;

  if (isError) return <h1>Error with request</h1>

  return (
    <div className="Home_container">
      <div> <Navigation /> </div>
      <div className="Home_div">
        <h1>Local Library Home</h1>
        <p>
          Welcome to LocalLibrary, a website developed by{" "}
          <em>Gaurav Joshi </em>!
        </p>
        <h2>Dynamic content</h2>
        <p>The library has the following record counts:</p>
        <ul> 
          <li><strong>Books: &nbsp;<p> {libraries.num_books}  </p></strong></li>
          <li><strong>Copies: &nbsp;<p> {libraries.num_instances}</p></strong></li>
          <li><strong>Copies available: &nbsp;<p> {libraries.num_instances_available}</p></strong></li>
          <li><strong>Authors: &nbsp;<p> {libraries.num_authors}</p></strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
