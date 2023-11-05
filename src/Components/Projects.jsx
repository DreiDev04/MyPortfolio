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
import FB_Figma from "../Images/FB_Figma.png";

function Projects() {
  return (
    <div className="my-lg-5" id="Projects">
      <div className=" mx-5">
        <p className="d-flex justify-content-center mb-5 display-5">Projects</p>

        <p className="blockquote mx-auto text-center mb-5" style={{ width: "80%" }}>
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
              desc="This is a freeCodeCamp Challenge which we are assigned to make a drum machine using React + Redux."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/JS-Calculator/"
              image={JSCalculator}
              title="JS Calculator"
              desc="A Calculator that has a basic arithmetic operations and additional features such as backspace, clear, and decimal. This is a freeCodeCamp Challenge."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/Pomodoro-Timer/"
              image={PomodoroTimer}
              title="Pomodoro Timer"
              desc="This is a freeCodeCamp Challenge which we are assigned to make a Pomodoro Timer but i want it to be designed as my time management app."
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://dreidev04.github.io/RandomQuoteGenerator/src/index.html"
              image={RandomQuoteGenerator}
              title="Quote Generator"
              desc="A random quote generator is a program that will pick a random quote from a online API that will display it on a webpage."
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
              desc="This is my first Project that I made using HTML, CSS, and JS. This is a confession page that will force your crush to say yes."
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://github.com/DreiDev04/GahDamMusicPlayer"
              image={GahdamMusicPlayer}
              title="Music Player from JAVA"
              desc="This is one of our case study, where we are assigned to make a simple program using JAVA Swing. We made a music player that can play, pause, stop, and skip music."
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://github.com/DreiDev04/Numble"
              image={NumbleFront}
              title="Numble"
              desc="Numble is a game I develop using c#. This is based on my case study in my Course in Human Computer Interactions (HCI)"
            />
          </Col>
          <Col md={4} className="mb-4">
            <EachProjects
              link="https://www.figma.com/proto/1YGn6Xd7j2YwywidmIEjfU/KAP-NINO?type=design&node-id=9-145&t=Ckt0EmdZAU5A3VO9-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3"
              image={FB_Figma}
              title="Figma Facebook Design"
              desc="This is our figma Challenge from my org ProgDen. We are assigned to make a facebook copy using figma."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
