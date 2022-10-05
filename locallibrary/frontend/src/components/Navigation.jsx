import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/Navigation.scss"

const Navigation = () => {
  return (
    <div className="Nav_container">
      <ul>
        <li> <Link className="link_tag" to="/">Home</Link> </li>
        <li> <Link className="link_tag" to="/Books">All Books</Link> </li>
        <li> <Link className="link_tag" to="/Authors">All Authors</Link> </li>
      </ul>
    </div>
  );
};

export default Navigation;
