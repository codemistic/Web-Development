import React from "react";
import "./Usercard.css"

function Usercard(props) {
  const { user } = props
  return (
    <div>
      <div class="card">
        <img src={user.avatar} alt="Person" class="card__image" />
        <h6 class="card__name"> firstname - <span id="orange">{user.first_name}</span> lastname - <span id="orange">{user.last_name}</span><br /><font size="3"><i><span id="orange">{user.email}</span></i></font><br /></h6>
        <div class="grid-container">
        </div>
        <ul class="social-icons">
          <li><a onClick={() => window.location = "mailto:" + user.email} target="_blank"><i class="fa fa-envelope"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Usercard;
