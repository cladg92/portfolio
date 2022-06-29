import React from "react";
import "./work-view.css";

import { Row, Col, Container, Nav } from "react-bootstrap";

import ProjectView from "../project-view/project-view";

function WorkView(props) {
  const { projects } = props;

  return (
    <Container className="work">
      <h1>Work</h1>
      <ul className="WorkView">
        <Row>
          {projects.map((project) => (
            <Col key={project.id} sm={12} md={6} lg={4}>
              <li>
                <ProjectView className="project" project={project} />
              </li>
            </Col>
          ))}
        </Row>
      </ul>
    </Container>
  );
}

export default WorkView;
