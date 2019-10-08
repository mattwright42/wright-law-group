import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';


import './CustomFooterNavbar.css';

const footerStyle = {
  backgroundColor: '#005f80',
  color: 'white',
  textAlign: 'center'
};

const CustomFooterNavbar = () => {
  return (
    <Container className="mw-100 p-0" style={footerStyle}>
      <Row>
        <Col md="12">
            &copy; 2019 Wright Law Group, PLLC
        </Col>
      </Row>
      <Row>
        <Col>
            <a href="/" to="/" style={footerStyle}>
              Home
            </a>
          ||
            <a href="/disclaimer" to="/disclaimer" style={footerStyle}>
              Disclaimer
            </a>
          ||
            <a href="/privacy-policy" to="/privacy-policy" style={footerStyle}>
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
              style={footerStyle}>
              Website design by Matthew Wright
            </Nav.Link>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooterNavbar;
