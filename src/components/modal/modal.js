import React from "react";
import "./modal.css";

import { Row, Col, Carousel, Modal, Button, Badge } from "react-bootstrap";

function ModalView(props) {
  const { project } = props;

  return (
    <Modal show={props.show} onHide={props.handleClose} centered size="lg">
      <Modal.Header className="text-center" closeButton>
        <h3>{project.Title}</h3>
      </Modal.Header>
      <Modal.Body>
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
        <div className="description">
          <div className="tech">
            {project.tech.map((t) => (
              <Badge bg="dark" className="tech-item">
                {t}
              </Badge>
            ))}
          </div>
          <br />
          {project.Description}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <a href={project.Github_Repo} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">Code</Button>
        </a>
        <a href={project.Live_Site} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Try it</Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalView;
