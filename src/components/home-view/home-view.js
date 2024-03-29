import React from "react";
import "./home-view.css";
import cv_fotocropped2 from "./cv_fotocropped2.png";

import { Button, Container, Row, Col } from "react-bootstrap";

function HomeView() {
  return (
    <div id="home">
      <Container className="profile">
        <Row className="home align-items-center">
          <Col className="profile__portrait " xs={12} md={6} lg={5} xl={4}>
            <img
              src={cv_fotocropped2}
              alt="Clara Di Gregorio portrait"
              className="profile__portrait"
            />
          </Col>

          <Col className="welcome" xs={12} md={6} lg={7} xl={7}>
            <h1 id="hello">Hi, I'm Clara.</h1>
            <p className="profile__paragraph">
              I'm a Full-Stack Web Developer with a background in environmental
              biology. <br />I mainly work with JavaScript and its client-side
              and server-side libraries and frameworks, although I am always
              open to learning new languages and tools.
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeView;
