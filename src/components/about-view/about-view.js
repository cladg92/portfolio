import React from "react";
import "./about-view.css";
import pic from "../../assets/pic.jpg";
import cv from "../../assets/DiGregorio_Clara_Resume.pdf";

import { Row, Col, Container, Button, Image } from "react-bootstrap";

function AboutView() {
  return (
    <div id="about">
      <div className="page-title">
        <h1>About me</h1>
      </div>
      <Container className="about">
        <Row xs={1} md={2}>
          <Col>
            <p className="profile__about">
              As a biologist-turned-web developer, I’ve always been passionate
              about learning new things, searching for logical explanations
              behind patterns, and finding practical solutions. Programming was
              a surprising discovery for me when, as a researcher-to-be, I found
              myself spending most of my time behind a computer screen,
              compiling and cleaning databases and performing analyses. <br />
              My background in biology has taught me valuable skills such as
              analytical thinking and problem-solving skills, as well as
              interpersonal and work-management skills. <br />
              My curiosity and fascination with programming languages and their
              potential to tackle problems and build solutions has eventually
              led me to my current path.
            </p>
          </Col>
          <Col>
            <p className="profile__about"></p>
          </Col>
        </Row>
      </Container>
      <Button
        className="resume-button"
        variant="outline-dark"
        size="lg"
        href={cv}
        download
      >
        <i class="fas fa-download fa-xl icon"></i>
        Download my resume
      </Button>
    </div>
  );
}

export default AboutView;

//<Image fluid src={pic} alt="pic" id="pic" className="pic" />
