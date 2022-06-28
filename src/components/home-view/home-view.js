import React from "react";
import "./home-view.css";
import cv_fotocropped2 from "./cv_fotocropped2.png";

function HomeView() {
  return (
    <div className="profile">
      <img
        src={cv_fotocropped2}
        alt="Clara Di Gregorio portrait"
        className="profile__portrait"
      />
      <div className="welcome">
        <h1 id="hello">Hello world!</h1>
        <p className="profile__paragraph">
          My name is Clara Di Gregorio. I am a <span>web</span> developer from
          Italy.
        </p>
        <div id="home_link">
          <a href="" target="_blank">
            Check out some of my code
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
