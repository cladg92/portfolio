import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./project-view.css";
import { Carousel } from "react-bootstrap";

import ModalView from "../modal/modal";

function ProjectView(props) {
  const { project } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="grid__item">
      <div className="project-link">
        <Row>
          <Col>
            <Carousel>
              {project.img.map((img) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 project-image"
                    src={img}
                    alt="slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className="project-description">
            <h2>{project.Title}</h2>
            <p>{project.Description}</p>
          </Col>
        </Row>
      </div>
      <ModalView handleClose={handleClose} show={show} project={project} />
    </div>
  );
}

export default ProjectView;
