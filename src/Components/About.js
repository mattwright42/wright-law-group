import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';

import './About.css';

const About = () => {
  
    return (
      <div>
        <Image src="" className="header-image" />
        <Container>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="" className="about-profile-pic" rounded/>
            <h3>About</h3>
            <p>That's a crooked tree.</p>
          </Col>
        </Container>
      </div>
    )
  }

  export default About;