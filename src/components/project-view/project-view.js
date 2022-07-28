import "./project-view.css";
import { Carousel, Card, Badge } from "react-bootstrap";

import github from "../footer/github.svg";
import website from "../footer/foreign.png";

function ProjectView(props) {
  const { project } = props;

  return (
    <div className="grid__item">
      <Card style={{ height: "670px" }}>
        <Card.Header>
          <h3>{project.Title}</h3>
        </Card.Header>
        <Carousel>
          {project.img.map((img) => (
            <Carousel.Item>
              <Card.Img
                className="d-block w-100 project-image"
                src={img}
                alt="slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>{" "}
        <Card.Body>
          <Card.Text>
            <div className="tech">
              {project.tech.map((t) => (
                <Badge bg="dark" className="tech-item">
                  {t}
                </Badge>
              ))}
            </div>
            <br />
            {project.Description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            href={project.Github_Repo}
            target="_blank"
            rel="noopener noreferrer"
            id="git-link"
          >
            <img src={github} alt="github" width="30" height="30" />
          </Card.Link>
          {"  "}
          <Card.Link
            href={project.Live_Site}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            id="website-link"
          >
            <img src={website} alt="website" width="25" height="25" />
          </Card.Link>
        </Card.Footer>
      </Card>

      <h2></h2>
    </div>
  );
}

export default ProjectView;
