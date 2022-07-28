import React from "react";
import "./home-view.css";
import cv_fotocropped2 from "./cv_fotocropped2.png";

import { Button } from "react-bootstrap";

function HomeView() {
  return (
    <div className="profile" id="home">
      <img
        src={cv_fotocropped2}
        alt="Clara Di Gregorio portrait"
        className="profile__portrait"
      />
      <div className="welcome">
        <h2 id="hello">Hi, I'm Clara.</h2>
        <p className="profile__paragraph">
          I'm a Full-Stack Web Developer with a background in environmental
          biology. <br />
          I mainly work with JavaScript and its client-side and server-side
          libraries and frameworks,
          <br />
          although I am always open to learning new languages and tools.
        </p>
        <Button
          className="resume-button"
          variant="outline-dark"
          size="lg"
          href="#about"
        >
          <i className="fa-solid fa-chevron-down icon" />
          More about me
        </Button>
      </div>
    </div>
  );
}

export default HomeView;
