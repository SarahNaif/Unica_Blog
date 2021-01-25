import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
;
export default function OneCardArticle(props) {
    return (
        <>
        
        <Col md="4" sm="4" className="mt-3">
            <Card  className ="card-movie">
                <Card.Img variant="top" src={props.url} height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.type}
                        <br/>
                        {props.description}
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
