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
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Container>
    )
  }

  export default Home;