import React from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';
import img1 from '../Assets/CarouselImages/img1.jpg';
import img2 from '../Assets/CarouselImages/img2.jpg';
import img3 from '../Assets/CarouselImages/img3.jpg';
import img4 from '../Assets/CarouselImages/img4.jpg';
import img5 from '../Assets/CarouselImages/img5.jpg';
import img6 from '../Assets/CarouselImages/img6.jpg';
import img7 from '../Assets/CarouselImages/img7.jpg';
import img8 from '../Assets/CarouselImages/img8.jpg';
import img9 from '../Assets/CarouselImages/img9.jpg';

import './Home.css';

const Home = () => {
  return (
    <Container className="mw-100 p-0">
      <Carousel className="w-100 h-50">
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img7} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img8} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={img9} alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <Jumbotron>
        <h2>Welcome to Wright Law Group!</h2>
        <p>
          This website is being built with React, React-Router, and
          React-Bootstrap
        </p>
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
  );
};

export default Home;
