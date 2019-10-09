import React from 'react';
import { Container, Col, Form, FormGroup, Button } from 'react-bootstrap';

import './Contact.css';

const Contact = () => {
  return (
    <Container>
      <h2>Contact Us!</h2>
      <Form className="form">
        <Col>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="myemail@email.com"></Form.Control>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name"></Form.Control>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="(123)-456-7890"></Form.Control>
          </FormGroup>
          </Col>
          <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Contact;