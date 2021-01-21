import react from "react"
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Login() {
  

  return (
    <Form className="mt-5">
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
               
              />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              
              />
            </Form.Group>
          </Form.Row>
          <Button>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}