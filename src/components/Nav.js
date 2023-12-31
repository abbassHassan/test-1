import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-contents">
        <img
          src="https://bull-headed-bear.com/wp-content/uploads/2022/08/image-18-1024x276.png"
          alt=""
          className="nav-logo"
        ></img>

        <div className="nav-right">
          <p>UNLIMITED TV SHOWS & MOVIES</p>
          <button className="join-button">JOIN NOW</button>
          <button className="signup-button">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
