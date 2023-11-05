import React from "react";
import "../Styles/Contacts.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <div className="d-flex justify-content-center my-5" id="Contacts">
      <div className="cardContact ">
        <div className="card2 text-white p-5 ">
          <h1 className="display-5 ">Let's Connect!</h1>
          <p className="blockquote">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="d-flex customs_button justify-content-center gap-2">
            <a
              href="mailto:tacujan.andrei@gmail.com?subject=Your%20Subject&body=Your%20Message"
              target="_blank"
            >
              <Button variant="outline-light">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>{" "}
                tacujan.andrei@gmail.com
              </Button>
            </a>
            <div>
              <a href="https://www.facebook.com/iamjohnandrei/" target="_blank">
                <Button variant="outline-light">
                  <FontAwesomeIcon icon={faFacebook} />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/john-andrei-tacujan-123ry/"
                target="_blank"
              >
                <Button variant="outline-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </a>
              <a href="https://github.com/DreiDev04" target="_blank">
                <Button variant="outline-light">
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
