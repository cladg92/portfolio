import React from "react";
import "./meet-view.css";

import { Row, Col, Container, Carousel } from "react-bootstrap";

function MeetView() {
  return (
    <Container className="meet-app">
      <h1>Meet-app</h1>
      <Row>
        <Col className="screenshots">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/400"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/400"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="description">
          <p>
            Serverless, progressive web application (PWA) built with React using
            a test-driven development (TDD) technique. The application uses the
            Google Calendar API to fetch upcoming events.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MeetView;
