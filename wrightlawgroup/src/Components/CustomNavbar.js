import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CustomNavbar.css';

const CustomNavbar = () => {
  
    return (
      <Navbar  default collapseOnSelect>
        
          <Navbar.Brand>
            <Link to="/">Wright Law Group</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav pullRight>
            <Nav.Link eventkey={1} componentClass={Link} href="/" to="/">
              Home
            </Nav.Link>
            <Nav.Link eventkey={2} componentClass={Link} href="/about" to="/about">
              About
            </Nav.Link>
            <Nav.Link eventkey={3} componentClass={Link} href="/news" to="/news">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      
    )
  }

  export default CustomNavbar;