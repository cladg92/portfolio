import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import ModalView from "../modal/modal";

function ProjectView(props) {
  const { project } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="grid__item">
      <Nav className="project-link" onClick={handleShow}>
        <h2>{project.Title}</h2>
        <img src={project.pic} className="project-image" alt="project" />
      </Nav>
      <ModalView handleClose={handleClose} show={show} project={project} />
    </div>
  );
}

export default ProjectView;
