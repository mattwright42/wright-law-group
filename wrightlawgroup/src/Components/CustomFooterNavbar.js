import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CustomFooterNavbar.css';

const CustomFooterNavbar = () => {
  return (
    <Container className="mw-100 p-0">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Row>
              <Col>
                <span className="align-middle">
                  &copy; 2019 Wright Law Group, PLLC
                </span>
              </Col>
            </Row>

            <Row>
              <Col>
                <span>
                  <Nav.Link componentClass={Link} href="/" to="/">
                    Home
                  </Nav.Link>
                </span>
                <span>||</span>
                <span>
                  <Nav.Link
                    componentClass={Link}
                    href="/disclaimer"
                    to="/disclaimer"
                  >
                    Disclaimer
                  </Nav.Link>
                </span>
                <span>||</span>
                <span>
                  <Nav.Link
                    componentClass={Link}
                    href="/privacy-policy"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Nav.Link>
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="align-middle">
                  <Nav.Link
                    componentClass={Link}
                    href="https://www.matthewbwright.dev/"
                    to="matthewbwright.dev"
                  >
                    Website design by Matthew Wright
                  </Nav.Link>
                </span>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default CustomFooterNavbar;
