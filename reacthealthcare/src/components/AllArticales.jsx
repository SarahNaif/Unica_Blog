import { Col, Container, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import OneCardArticle from './OneCardArticle'
import Axios from 'axios'



export default function AllArticales(props) {

     /* =================
     Hooks State  
     ================= */
    const [posts ,setPosts ] = useState([])

     const [types , setTypes] = useState([])

     useEffect(()=>{
         Axios.get('http://localhost:5000/api/articles')
         .then((res)=>{
            setPosts(res.data)
         })
     }, [])


     const allPosts = posts.map((ele,i)=>{
        return <OneCardArticle
              title = {ele.title}
              description ={ele.description}
              type ={ele.type}
              url = {ele.image} />
      })


      /* =================
     Functions Handler  
     ================= */








 /* =======================
     Foorm Displat all posts  
     ====================== */

    return (
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
                {allPosts.length !==0 ? allPosts : (<h1>Loading posts ... </h1>)}
            </Row>
        </Container>
    )
}
