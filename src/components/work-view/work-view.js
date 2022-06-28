import React from "react";
import "./work-view.css";

import { Row, Col, Container } from "react-bootstrap";

import Progect_1 from "./Project_1.jpg";
import Progect_2 from "./Project_2.jpg";
import Progect_3 from "./Project_2.jpg";

function WorkView() {
  return (
    <Container className="work">
      <h1 className="projects-heading">Work</h1>
      <Row className="grid ">
        <Col md={4} className="grid__item justify-content-md-center">
          <h2>Project 1</h2>
          <img src={Progect_1} className="project-image" alt="project" />
        </Col>
        <Col md={4} className="grid__item">
          <h2>Project 2</h2>
          <img src={Progect_2} className="project-image" alt="project" />
        </Col>
        <Col md={4} className="grid__item">
          <h2>Project 3</h2>
          <img src={Progect_3} className="project-image" alt="project" />
        </Col>
        <Col md={4} className="grid__item">
          <h2>Project 4</h2>
          <img src={Progect_1} className="project-image" alt="project" />
        </Col>
        <Col md={4} className="grid__item">
          <h2>Project 5</h2>
          <img src={Progect_2} className="project-image" alt="project" />
        </Col>
        <Col md={4} className="grid__item">
          <h2>Project 6</h2>
          <img src={Progect_3} className="project-image" alt="project" />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkView;
