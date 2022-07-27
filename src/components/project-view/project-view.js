import { Row, Col, Container } from "react-bootstrap";
import "./project-view.css";
import { Carousel } from "react-bootstrap";

import github from "../footer/github.svg";
import website from "../footer/foreign.png";

function ProjectView(props) {
  const { project } = props;

  return (
    <div className="grid__item">
      <Container className="project-link">
        <Row xs={1} md={2}>
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

            <p>{project.tech.map((t) => " -  " + t)}</p>
            <p id="project-description">{project.Description}</p>
            <a
              href={project.Github_Repo}
              target="_blank"
              rel="noopener noreferrer"
              id="git-link"
            >
              <img src={github} alt="github" width="30" height="30" />
            </a>
            {"  "}
            <a
              href={project.Live_Site}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <img src={website} alt="website" width="25" height="25" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectView;
