import React from "react";
import "./footer.css";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="page-footer">
      <Container>
        <Row className="justify-content-center" xs={1} sm={3}>
          <Col className="footer-section">
            <div className="contact-info">
              <p>
                Clara Di Gregorio
                <br />
                Bayreuth, Germany <br />
                <a
                  className="email mail-link"
                  href="mailto:digregorioclr@gmail.com"
                  id="mail"
                >
                  digregorioclr@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col className="footer-section">
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
                  href="https://www.linkedin.com/in/claradg/"
                  target="_blank"
                  rel="noreferrer"
                  className="link filter-white"
                  aria-hidden="true"
                >
                  <img src={linkedin} alt="linkedin" width="30" height="30" />
                </a>
                <a
                  href="https://twitter.com/cladg2"
                  target="_blank"
                  rel="noreferrer"
                  className="link filter-white"
                  id="twitter-link"
                  aria-hidden="true"
                >
                  <img src={twitter} alt="twitter" width="28" height="30" />
                </a>
              </div>
            </div>
          </Col>
          {window.location.pathname === "/" && (
            <Col className="footer-section">
              <p>Pictures from Unsplash by:</p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@thimo"
                className="link"
              >
                {" "}
                Thimo Pedersen
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@priscilladupreez"
                className="link"
              >
                {" "}
                Priscilla Du Preez
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@felixmooneeram"
                className="link"
              >
                {" "}
                Felix Mooneeram
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@tysonmoultrie"
                className="link"
              >
                {" "}
                Tyson Moultrie
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@maikeningvordsen"
                className="link"
              >
                {" "}
                Maiken Ingvordsen
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@subvertivo_lab"
                className="link"
              >
                {" "}
                subvertivo _lab
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@glencarrie"
                className="link"
              >
                {" "}
                Glen Carrie
              </a>
            </Col>
          )}
        </Row>
        <Row xs={1} className="footer-section">
          <Col>Designed and coded by Clara Di Gregorio</Col>
          <Col>
            All rights reserved
            {window.location.pathname === "/" && (
              <>
                <span> | </span>
                <a href="/impressum" className="mail-link">
                  Impressum
                </a>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
