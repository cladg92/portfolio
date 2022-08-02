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
            <p className="profile__about" id="profile__about_1">
              I'm a Full-stack web developer from Italy, currently located in
              Bavaria.
              <br />
              <br /> I have a Master degree in Environmental Biology and have
              been working as a Research assistant in the academic field until
              last year. Programming was a surprising discovery for me when, as
              a researcher-to-be, I found myself spending most of my time behind
              a computer screen, compiling and cleaning databases and performing
              analyses. I progressively realised I enjoyed the coding part of my
              job more and more, until last year I decided to "follow my guts"
              and transition into tech.
              <br />
              <br /> As a biologist-turned-web developer, I’ve always been
              passionate about learning new things, searching for logical
              explanations behind patterns, and finding practical solutions.
              <br />
              My background in biology has taught me valuable skills such as
              analytical thinking and problem-solving skills, as well as
              interpersonal and work-management skills.
            </p>
          </Col>
          <Col>
            <p className="profile__about" id="profile__about_2">
              My curiosity and fascination with programming languages and their
              potential to tackle problems and build solutions has eventually
              led me to my current path.
              <br /> I see myself as a lifelong learner and that's just yet
              another aspect that makes web development so exciting: it's an
              endless journey of learning! <br />
              <br />
              Apart from coding, I enjoy hiking in the mountains of my{" "}
              <a
                href="https://en.wikipedia.org/wiki/Abruzzo"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                home region
              </a>
              , reading novels and traveling. <br />
              Learning languages holds a special place among my hobbies and I
              like to think that this is somehow related to my inclination for
              programming languages as well. I am fascinated by the cognitive
              process involved in learning a new language, I enjoy noticing and
              grasping its grammatical and lexical peculiarities, and, of
              course, I strive for the end result: being able to communicate and
              therefore gain a unique access to the culture behind it.
            </p>
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
