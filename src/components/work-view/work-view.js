import React from "react";
import "./work-view.css";

import { Row, Col, Container } from "react-bootstrap";

import Progect_2 from "./Project_2.jpg";

function WorkView() {
  return (
    <Container className="work">
      <h1>Work</h1>
      <Row xs={1} md={2} lg={3} className="grid ">
        <Col className="grid__item justify-content-md-center">
          <a href="/" className="project-link">
            <h2>Pokedex App</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
        <Col className="grid__item">
          <a href="/meet-app" className="project-link">
            <h2>Meet App</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
        <Col className="grid__item">
          <a href="/" className="project-link">
            <h2>Chat App</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
        <Col className="grid__item">
          <a href="/" className="project-link">
            <h2>myFlix API</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
        <Col className="grid__item">
          <a href="/" className="project-link">
            <h2>myFlix App - React</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
        <Col className="grid__item">
          <a href="/" className="project-link">
            <h2>myFlix App - Angular</h2>
            <img src={Progect_2} className="project-image" alt="project" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkView;
