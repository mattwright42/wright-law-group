import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  
    return (
      <Navbar bg="dark" variant="dark" default collapseOnSelect>
        
          <Navbar.Brand>
            <Link to="/">Wright Law Group</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav pullRight color="white">
            <NavItem eventkey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventkey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventkey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      
    )
  }

  export default CustomNavbar;