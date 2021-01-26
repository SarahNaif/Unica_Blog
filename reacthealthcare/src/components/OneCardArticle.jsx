import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardArticle(props) {





     /* ======================
     Card To show one Artcile 
     ========================= */
    return (
        <>
        
        <Col md="4" sm="4" className="mt-3">
            <Card  className ="card-movie">
                <Card.Img variant="top" src={props.post.image} height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                    <Card.Text>
                        {props.post.type}
                        <br/>
                        {props.post.description}
                        <br/>   
                     </Card.Text>
                     <Row >
                     <Col md={!props.delete? "12" : "5"}>
                    
                    <Link to={`/posts/${props.post.title}`}> <Button > more info</Button> </Link> 
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
