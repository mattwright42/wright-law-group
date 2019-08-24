import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import wlglogo from '../Assets/wright-law-group-logo.jpg';

import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          src={wlglogo}
          width="80"
          height="80"
          class="d-inline-block align-top"
          alt="Wright Law Group Logo"
        />
        <Link to="/">Wright Law Group, PLLC</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto mr-0">
          <Nav.Link componentClass={Link} href="/" to="/">
            Home
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/about" to="/about">
            About
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/blog" to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link componentClass={Link} href="/contact" to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
