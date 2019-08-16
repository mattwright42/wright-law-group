import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './News.css';

const News = () => {
  
    return (
      <div>
        <Image src="" className="header-image" />
        <Container>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>I spend a lot of time walking around in the woods and talking to tress, and squirrels.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src=""/>
              <p>This is sidebar section.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  export default News;