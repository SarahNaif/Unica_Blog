import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'






export default function AllArticales() {

     /* =================
     Hooks State  
     ================= */



      /* =================
     Functions Handler  
     ================= */








 /* =======================
     Foorm Displat all posts  
     ====================== */

    return (
    <div>
        <Container >
            <Row className="justify-content-md-center" >
                <Col md="4" >
                    <Form >
                        <Form.Group controlId="exampleForm.SelectCustom" >
                            <Form.Label style={{color:"white"}} >Type of the Article </Form.Label>
                            <Form.Control as="select">
                          
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
            </Row>
        </Container>
    </div>
    )
}
