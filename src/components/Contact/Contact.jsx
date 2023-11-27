import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Contact/Contact.css"

function ContactComponent() {

    return (
      <>
        <div className="text-center contact">
          <div className="container hero">
              <h2>Any question?</h2>
              <p>Please, let us know</p>
          </div>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tell us how we can help you</Form.Label>
              <Form.Control as="textarea" rows={4} className="description" placeholder="Type your text here..." />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    )
  }
  
  export default ContactComponent;