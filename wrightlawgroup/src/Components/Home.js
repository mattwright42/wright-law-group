import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Carousel, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to Wright Law Group!</h2>
          <p>This website is being built with React, React-Router, and React-Bootstrap</p>
          <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>That's a crooked tree.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>That's a crooked tree.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>That's a crooked tree.</p>
          </Col>
        </Row>
        
      </Container>
    )
  }

  export default Home;