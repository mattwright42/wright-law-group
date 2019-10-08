import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CustomFooterNavbar.css';

const CustomFooterNavbar = () => {
  return (
    <Container className="mw-100 p-0">
            <Row>
              <Col md="12">
                
                  &copy; 2019 Wright Law Group, PLLC
                
              </Col>
            </Row>

            <Row>
              <Col>
                
                  <a href="/" to="/">
                    Home
                  </a>
                
                ||
                
                  <a href="/disclaimer" to="/disclaimer">
                    Disclaimer
                  </a>
                
                ||
                
                  <a href="/privacy-policy" to="/privacy-policy">
                    Privacy Policy
                  </a>
                
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="align-middle">
                  <Nav.Link
                    href="https://www.matthewbwright.dev/"
                    to="matthewbwright.dev"
                  >
                    Website design by Matthew Wright
                  </Nav.Link>
                </span>
              </Col>
            </Row>
    </Container>
  );
};

export default CustomFooterNavbar;
