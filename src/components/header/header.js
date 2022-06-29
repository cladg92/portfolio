import React from "react";
import "./header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="header"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a className="menu-item" href="#home">
              Home
            </a>
            <a className="menu-item" href="#about">
              About
            </a>
            <a className="menu-item" href="#work">
              Work
            </a>
            <a className="menu-item" href="#contact">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
