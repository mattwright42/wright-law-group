import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CustomFooterNavbar.css';

const CustomFooterNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          &copy; 2019 Wright Law Group, PLLC <br />
          <Nav.Link componentClass={Link} href="/" to="/">
            Home
          </Nav.Link>
          ||
          <Nav.Link componentClass={Link} href="/disclaimer" to="/disclaimer">
            Disclaimer
          </Nav.Link>{' '}
          ||
          <Nav.Link
            componentClass={Link}
            href="/privacy-policy"
            to="/privacy-policy"
          >
            Privacy Policy
          </Nav.Link>{' '}
          <br />
          <Nav.Link
            componentClass={Link}
            href="https://www.matthewbwright.dev/"
            to="matthewbwright.dev"
          >
            Website design by Matthew Wright
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomFooterNavbar;
