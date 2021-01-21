import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
export default function SignUp() {
    const history = useHistory();

    const [user, setUser] = useState({}); // user info
    const [register, setRegister] = useState(true); // to show aleart
  
    //to add the input inside user
    const onChangeInput = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    };
    // to add the user info to database
    const onSubmit = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:5000/api/user/register", user)
        .then((res) => {
          const user = res.data.user;
          if (user) {
            history.push("/login");
          } else {
            setTimeout(() => {
              setRegister(false);
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    };
  
    return (
        <>
        {!register && (
            <Alert variant={"danger"}>
              The email is already in use. Please change the email
            </Alert>
          )}


        <Form className=" d-flex  justify-content-center align-items-center align-content-center " >
        <Row className=" mt-5">
          <Col md={12}>
            <Form.Row>
              <Col md={12}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{color:"white"}}> Name</Form.Label>
                <Form.Control
                  placeholder="Name "
                  name="name"
                  onChange={(e) => onChangeInput(e)}
                 
                />
                 </Form.Group>
              </Col>
              
            </Form.Row>

            <Form.Row>
            <Col md={12}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{color:"white"}}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                 
                />
              </Form.Group>
              </Col>
              </Form.Row>

              <Form.Row>
              <Col md={12}>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label style={{color:"white"}}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                

                />
                
              </Form.Group>
              </Col>
              </Form.Row>
            <Button
            className="ms-5 align-items-center"
              variant="primary"
              type="submit"
              value="button"
              onClick={(e) => onSubmit(e)}
             
            >
             Submit
            </Button>
            
          </Col>
        </Row>
       
      </Form>
      </>

    )
}
