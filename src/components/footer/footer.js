import React from "react";
import "./footer.css";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="page-footer">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="contact-info">
              <p>
                Clara Di Gregorio
                <br />
                Bayreuth, Germany
              </p>
              <p className="email">
                <a
                  className="mail-link"
                  href="mailto:digregorioclr@gmail.com"
                  id="mail"
                >
                  digregorioclr@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="social-media">
              <p>Find me on</p>
              <div className="social-media">
                <a
                  href="https://github.com/cladg92"
                  target="_blank"
                  rel="noreferrer"
                  className="link filter-white"
                  aria-hidden="true"
                >
                  <img src={github} alt="github" width="30" height="30" />
                </a>
                <a
                  href="https://www.linkedin.com/in/clara-di-gregorio-8082291a9/"
                  target="_blank"
                  rel="noreferrer"
                  className="link filter-white"
                  aria-hidden="true"
                >
                  <img src={linkedin} alt="github" width="30" height="30" />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <a href="#" className="mail-link">
              Impressum
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
