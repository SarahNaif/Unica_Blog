import React from 'react'
import { Navbar , Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Navbar.css"


  /* ===================
      Navigation to pages 
     ===================*/

     
export default function NavBar(props) {
    return (
        
       
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="navbar-brand" href="#">Unica 
    <i className="fa fas fa-leaf"></i>
    </Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>

        
        
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link class="nav-link" to="/SignUp">SignUp</Link>
        </li>

        
        <li class="nav-item">
          <Link class="nav-link " to="/login"  >LogIn</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/profile"  >UserProfile</Link>
        </li> 
      </ul>
      
    </div>
    
     <Button className ="btn btn-secondary"
            onClick={() => {
              console.log("Logging Out!");
              localStorage.removeItem("jwtToken");
              props.loginCallback();
            }}
          >
            Logout
          </Button>
  </div>
</nav>
      
    )
}
