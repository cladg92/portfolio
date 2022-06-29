import React from "react";
import "./home-view.css";
import cv_fotocropped2 from "./cv_fotocropped2.png";

function HomeView() {
  return (
    <div className="profile" id="home">
      <img
        src={cv_fotocropped2}
        alt="Clara Di Gregorio portrait"
        className="profile__portrait"
      />
      <div className="welcome">
        <h1 id="hello">Hello, I'm Clara</h1>
        <p className="profile__paragraph">
          I am a web developer with a background in environmental biology.
        </p>
      </div>
    </div>
  );
}

export default HomeView;
