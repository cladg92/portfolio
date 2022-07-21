import React from "react";
import "./work-view.css";

import { Row, Col, Container } from "react-bootstrap";

import ProjectView from "../project-view/project-view";

function WorkView(props) {
  const { projects } = props;

  return (
    <Container className="work" id="work">
      <ul className="WorkView">
        <h1>Work</h1>
        <Row sm={1} md={2} lg={3}>
          {projects.map((project) => (
            <Col key={project.id}>
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
