import React from "react";
import "../Styles/Projects.css";
import EachProjects from "./EachProjects";
import { Container, Row, Col } from "react-bootstrap";

import DrumMachine from "../Images/DrumMachine.png";
import JSCalculator from "../Images/JSCalculator.png";
import PomodoroTimer from "../Images/PomodoroTimer.png";
import RandomQuoteGenerator from "../Images/RandomQuoteGenerator.png";
import MarkdownPreviewer from "../Images/MarkdownPreviewer.png";
import ForceYesConfession from "../Images/ForceYesConfession.png";
import GahdamMusicPlayer from "../Images/GahDamMusicPlayer.png";
import NumbleFront from "../Images/numbleFront.jpg";
import FigmaFacebookDesign from "../Images/FigmaFacebookDesign.jpg";

function Projects() {
  return (
    <div className="my-lg-5" id="Projects">
      <div className=" mx-5">
        <p className="d-flex justify-content-center mb-5 display-5">Projects</p>

        <p className="blockquote mx-auto text-center" style={{ width: "80%" }}>
          Here's a sneak peek at a few of my most recent projects. I love to
          transform ideas into web projects or anything related to UI/UX that inspires me to do more projects.
        </p>
      </div>
      <br />
      <Container className="d-flex flex-column justify-content-center align-item-center">
        <Row>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/DrumMachine-FCC-vite/"
              image={DrumMachine}
              title="Drum Machine"
              desc="A drum machine is a musical instrument that makes sounds by striking the membrane with drum sticks."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/JS-Calculator/"
              image={JSCalculator}
              title="JS Calculator"
              desc="A calculator is a device that performs arithmetic operations on numbers."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/Pomodoro-Timer/"
              image={PomodoroTimer}
              title="Pomodoro Timer"
              desc="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s."
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/RandomQuoteGenerator/src/index.html"
              image={RandomQuoteGenerator}
              title="Quote Generator"
              desc="A random quote generator is a program that will pick a random quote from a list of quotes and display it to the user of the program."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/MarkdownPreviewer/"
              image={MarkdownPreviewer}
              title="Markdown Previewer"
              desc="Markdown is a lightweight markup language for creating formatted text using a plain-text editor."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/ConfessToYourCrush/krass.html"
              image={ForceYesConfession}
              title="Force Yes Confession"
              desc="A confession is a statement – made by a person or by a group of persons – acknowledging some personal fact that the person (or the group) would ostensibly prefer to keep hidden."
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://github.com/DreiDev04/GahDamMusicPlayer"
              image={GahdamMusicPlayer}
              title="Music Player from JAVA"
              desc=""
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://github.com/DreiDev04/Numble"
              image={NumbleFront}
              title="Numble"
              desc="Markdown is a lightweight markup language for creating formatted text using a plain-text editor."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://www.figma.com/proto/1YGn6Xd7j2YwywidmIEjfU/KAP-NINO?type=design&node-id=9-145&t=Ckt0EmdZAU5A3VO9-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3"
              image={FigmaFacebookDesign}
              title="Figma Facebook Design"
              desc=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
