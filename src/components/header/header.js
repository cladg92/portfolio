import React from "react";
import "./header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="header"
      expand="lg"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <i class="fa-solid fa-code icon"></i>
          CDG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
