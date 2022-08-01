import React from "react";
import "./work-view.css";

import { Row, Col, Container } from "react-bootstrap";

import ProjectView from "../project-view/project-view";

function WorkView(props) {
  const { projects } = props;

  return (
    <div className="outer-workdiv">
      <Container className="work" id="work">
        <h1>Work</h1>
        <ul className="WorkView">
          <Row xs={1} md={2} xxl={3} className="work-view">
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
    </div>
  );
}

export default WorkView;
