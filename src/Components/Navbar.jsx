import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "../Styles/Navbar.css";

function Navbar() {
  const offset = 80;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className="nav-bar navbar-expand-lg blockquote sticky-top"
    >
      <div className="container ">
        <BootstrapNavbar.Brand href="#Home">
          <span className="blockquote">My Portfolio</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item as="li">
              <Nav.Link onClick={() => scrollToSection("Home")}>
                <span className="text-white">Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick={() => scrollToSection("TechStack")}>
                <span className="text-white">Tech Stacks</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick={() => scrollToSection("AboutMe")}>
                <span className="text-white">About Me</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick={() => scrollToSection("Projects")}>
                <span className="text-white">Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick={() => scrollToSection("Contacts")}>
                <span className="text-white">Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
}

export default Navbar;
