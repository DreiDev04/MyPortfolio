import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import "../Styles/App.css";


function Hero() {
  return (
    <Container className="my-5 aboutmecol">
      <div id="Home"></div>
      <Row>
        <Col
          className="text-white d-flex flex-column
          justify-content-center align-items-center my-5 "
        >
          <div className="info justify-content-center greetings_container text-center">
            <h1 className="display-3">
              Hi, I'm <span className="name">John Andrei Tacujan</span>
            </h1>
            <h3 className="display-6 client">Your Future Client</h3>
            <p className="blockquote m-xs-5 px-5">
              A motivated and ambitious student with a strong passion in
              computer programming. Eager to gain hands on experience and
              contribute to the growth and success of a company.
            </p>
          </div>

          <Button
            variant="outline-light"
            className="align-self-center"
            href="https://drive.google.com/file/d/1Y9ZytiHy7B_i1kgJai-uG5q60uQHdhia/view"
            target="_blank"
          >
            Download CV
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
