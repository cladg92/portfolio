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
        <br />
        <Row xs={1} md={3}>
          {projects.map((project) => (
            <Col>
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
