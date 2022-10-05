import React from "react";
import "./Sidebar.css";
import songLogo from "../assets/images/songlogo.jpg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topbar">
        <ul className="toplist">
          <li className="focus">UP NEXT</li>
          <li>LYRICS</li>
          <li>RELATED</li>
        </ul>
      </div>
      <div className="songsList">
        <ul className="songs">
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
              
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
              
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
              
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
              
            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>

            </div>
          </li>
          <li>
            <div className="singleSong">
              <img src={songLogo} alt="" />
              <p>12 Bande</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
