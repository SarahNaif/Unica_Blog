import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
;
export default function OneCardArticle() {
    return (
        <>
        
        <Col md="4" sm="4" className="mt-3">
            <Card  className ="card-movie">
                <Card.Img variant="top" src="" height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>Self Improvement</Card.Title>
                    <Card.Text>
                        description : self improvement
                        <br/>
                        type : Self improvement
                        <br/>
                        markdown :
                        <br/>
                        
                     </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
