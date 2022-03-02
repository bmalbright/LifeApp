import React from "react";
import "../css/App.css";
import twitter from "../images/twitter-icon.png";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/github-icon.png";
import email from "../images/email-icon.png";
import { Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col>
        <a href="mailto:brian@ondeckconsulting.net">
        <img className="img-responsive" src={email} alt="email" />
        </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/albright-brian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={linkedin} alt="linkedin" />
          </a>
        </Col>
        <Col>
        <a
            href="https://github.com/bmalbright"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={github} alt="github" />
          </a>
        </Col>
        <Col>
        <a
            href="https://www.twitter.com/BAlbright01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-responsive" src={twitter} alt="twitter" />
          </a>
        </Col>
      </Row>

    </div>
  );
}

export default Footer;