import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../Context/UserContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const context = useContext(UserContext);
  const {getInfo, setLoading} = context;

  const getUser = () => {
    setLoading();
    getInfo();
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link
            className="nav-logo"
            style={{ maxWidth: "450px" }}
            to="/"
            onClick={refreshPage}
          >
            <h3>Advertyzement</h3>
          </Link>

          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" id="homelist">
                <Link className="nav-links" to="/" onClick={getUser}>
                  Get User
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
