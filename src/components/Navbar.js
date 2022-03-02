import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
    Container, 
    // Image
  } from 'react-bootstrap';

import "../css/App.css";

// import Brand from "../images/ondeck-brand.png"

const AppNavbar = () => {
 
  return (
    <>
      <Navbar expand='lg' className="header">
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
            Life App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                About Me
              </Nav.Link>
                
                  <Nav.Link as={Link} to='/schedule'>
                    Schedule
                  </Nav.Link>

                  <Nav.Link as={Link} to='/notes'>
                    Notes
                  </Nav.Link>

                  <Nav.Link as={Link} to='/weather'>
                    Weather
                  </Nav.Link>
  
                  <Nav.Link as={Link} to='/password'>
                    Password
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      
    </>
  );
};

export default AppNavbar;
