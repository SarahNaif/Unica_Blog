import React from 'react'
import { Navbar , Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
      <Navbar bg="dark"  style={{opacity:0.5 } }>
    <Navbar.Brand href="/">
      <img
        src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand as={Link} to="/articles" style={{color:"white" , marginLeft:"30px"}}>
       Articles
      </Navbar.Brand>
    </Navbar.Brand>
  </Navbar>
      </>
    )
}
