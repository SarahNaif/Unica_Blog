import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row , Alert } from "react-bootstrap";

export default function Login(props) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });


  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", credentials)
      .then((res) => {
        console.log("Express backend /login response", res);

        const token = res.data.token;
        const msg = res.data.msg;

        if (token) {
          localStorage.setItem("jwtToken", token);
          props.loginCallback();
          history.push("/");
        } else {
        console.log("Email isn't exist try again")
         
        }
      });
  };


  
  return (
    <Form className=" d-flex  justify-content-center align-items-center align-content-center " >
    <Row className=" mt-5">
        <Col md={10}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => onChangeInput(e)}
            
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
                onChange={(e) => onChangeInput(e)}
                
              
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)} >
            Submit

          </Button>
        </Col>
      </Row>
    </Form>
  );
}
