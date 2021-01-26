import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Container, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'



export default function Show() {

  /* ===================
     Hooks & State
     ===================*/
    const [posts, setPosts] = useState([]);
    const { title } = useParams();

    /* =====================
      To Fetch all the posts
     =======================*/
    useEffect(() => {
      fetch('http://localhost:5000/api/articles')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    }, []);




    /*-- Params usage -- */
    const post = posts.find((post) => post.title == title);
    return (

      
      /* ===================
      Card For Display 
     ===================*/
      <>
        {post ? (
        <Container className="mt-5" style={{color:"black"}} >
            <Row >
                <Col md="6" >
                <img width="100%"  src={post.image} alt="" srcset="" />
                </Col>
                <Col md="6">
                    <h2>{post.title}</h2>
                    <h6> {post.description}</h6>
                    <h4>{post.type}</h4>
                    <p>{post.markdown}</p>
                </Col>
            </Row>

        </Container>
    
        ) : (
          <h1>Loading content ...</h1>
        )}
      </>
    )}
    
 
    
