import React from "react";
import "./about-view.css";
import pic from "../../assets/pic.jpg";

import { Row, Col, Container, Button, Image } from "react-bootstrap";

function AboutView() {
  return (
    <div id="about">
      <h1>About me</h1>
      <br />
      <Container className="about">
        <Row>
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
            <p className="profile__about">
              <Image fluid src={pic} alt="pic" id="pic" />
            </p>
          </Col>
        </Row>
      </Container>
      <Button
        className="resume-button"
        variant="outline-dark"
        size="lg"
        href="#"
        download
      >
        <i class="fas fa-download fa-xl icon"></i>
        Download my resume
      </Button>
    </div>
  );
}

export default AboutView;
