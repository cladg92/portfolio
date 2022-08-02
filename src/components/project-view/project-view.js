import "./project-view.css";
import React, { useState } from "react";
import { Carousel, Card, Badge, Nav } from "react-bootstrap";
import ModalView from "../modal/modal";

import github from "../footer/github.svg";
import website from "../footer/foreign.png";

function ProjectView(props) {
  const { project } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="grid__item">
      <div className="grid__item">
        <Nav className="project-link" onClick={handleShow}>
          <h2 className="project-title">{project.Title}</h2>
          <img src={project.pic} className="project-image pic" alt="project" />
        </Nav>
        <ModalView handleClose={handleClose} show={show} project={project} />
      </div>
    </div>
  );
}

export default ProjectView;
