import React from 'react';
import {
 // Jumbotron,
    Container,
    Row, 
    Col,
} from 'react-bootstrap';

import email from "../images/email-icon-76.png";

import "../css/App.css";

function SendEmail() {
    return (
      <Container>
      <div className="contact">
        <div className="clickToEmail">
          <Row>
            <Col>
              <a>
                Password
              </a>
            </Col>
          </Row>
        </div>
       
      </div>
      </Container>
    );
  }
  
  export default SendEmail;