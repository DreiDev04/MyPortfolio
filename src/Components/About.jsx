import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  ToggleButton,
  ToggleButtonGroup,
  ProgressBar
} from "react-bootstrap";
import "../Styles/About.css";

function About() {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleToggle = (value) => {
    setSelectedValue(value);
    console.log(value);
  };
  return (
    <Container className="my-5"id="AboutMe">
      <Row className="text-white">
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="cardAbout"></div>
        </Col>
        <Col className="aboutmecol_2">
          <h1 className="display-4">About me</h1>
          <p className="blockquote ">
            I am currently a second-year Computer Science student at Tarlac
            State University, the number one university in Central Luzon. I have recently
            finished freeCodeCamp Challenges:{" "}
            <a href="https://www.freecodecamp.org/certification/_iamjohnandrei/front-end-development-libraries" target="_blank" style={{ textDecoration: "none" }}>
              Front End Development Libraries
            </a>
            ,{" "}
            <a href="https://www.freecodecamp.org/certification/_iamjohnandrei/javascript-algorithms-and-data-structures" target="_blank" style={{ textDecoration: "none" }}>
              JavaScript Algorithms and Data Structures
            </a>
            , and{" "}
            <a href="https://www.freecodecamp.org/certification/_iamjohnandrei/responsive-web-design" target="_blank" style={{ textDecoration: "none" }}>
              Responsive Web Design
            </a>
            .
          </p>
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
            size="sm"
          >
            <ToggleButton
              id="tbg-radio-1"
              value={1}
              variant="outline-primary"
              className="text-white "
              checked={selectedValue === 1}
              onChange={() => handleToggle(1)}
            >
              Main Skills
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value={2}
              variant="outline-primary"
              className="text-white "
              checked={selectedValue === 2}
              onChange={() => handleToggle(2)}
            >
              Soft skill
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-3"
              value={3}
              variant="outline-primary"
              className="text-white "
              checked={selectedValue === 3}
              onChange={() => handleToggle(3)}
            >
              Education
            </ToggleButton>
          </ToggleButtonGroup>

          {selectedValue === 1 ? (
            <Container className="my-4">
              <Row>
                <Col className="mx-md-5">
                  <h6>Front End Development</h6>
                  <ProgressBar now={90} variant="info" />
                  <h6>Figma Design</h6>
                  <ProgressBar now={75} variant="danger" />
                  <h6>Game Development</h6>
                  <ProgressBar now={30} variant="success" />
                  <h6>Backend Development</h6>
                  <ProgressBar now={15} variant="warning" />
                </Col>
              </Row>
            </Container>
          ) : selectedValue === 2 ? (
            <Container className="my-4">
              <Row>
                <Col className="mx-md-5">
                  <h6>Teamwork</h6>
                  <ProgressBar now={100} variant="info" />
                  <h6>Communication</h6>
                  <ProgressBar now={100} variant="danger" />
                  <h6>Problem Solving</h6>
                  <ProgressBar now={100} variant="success" />
                  <h6>Critical Thinking</h6>
                  <ProgressBar now={100} variant="warning" />
                </Col>
              </Row>
            </Container>
          ) : selectedValue === 3 ? (
            <Container className="my-4">
              <Row>
                <Col className="mx-md-5">
                  <h6>College</h6>
                  <ProgressBar now={50} variant="info" />
                  <h6>High School</h6>
                  <ProgressBar now={100} variant="danger" />
                  <h6>Elementary</h6>
                  <ProgressBar now={100} variant="success" />
                </Col>
              </Row>
            </Container>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
