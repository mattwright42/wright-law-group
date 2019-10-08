import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import wlglogo from '../Assets/wright-law-group-logo.jpg';

import './CustomNavbar.css';

const linkStyle = {
  color: 'white'
};

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="/">
        <img
          src={wlglogo}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Wright Law Group Logo"
        />
      </Navbar.Brand>
      <div className="business">
        Wright Law Group, PLLC
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto mr-0">
          <Nav.Link  href="/" to="/" style={linkStyle}>
            Home
          </Nav.Link>
          <Nav.Link  href="/about" to="/about" style={linkStyle}>
            About
          </Nav.Link>
          <Nav.Link  href="/blog" to="/blog" style={linkStyle}>
            Blog
          </Nav.Link>
          <Nav.Link  href="/contact" to="/contact" style={linkStyle}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
