import React from "react";
import "./modal.css";

import { Row, Col, Carousel, Modal, Button } from "react-bootstrap";

function ModalView(props) {
  const { project } = props;

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{project.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="screenshots">
            <Carousel>
              {project.img.map((img) => (
                <Carousel.Item>
                  <img className="d-block w-100" src={img} alt="slide" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className="description">
            <p>{project.Description}</p>
          </Col>
        </Row>
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
