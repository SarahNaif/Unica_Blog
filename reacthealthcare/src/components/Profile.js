
import React , {useEffect , useState}  from "react";

//import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./UserProfile.css"
export default function Profile(props) {
    

        const { _id} = props.auth.currentUser;

         const [user , setUser] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/profile/${_id}`)
          .then(data => {
           console.log(data)
           setUser(data.data.user)

          })
    
      }, [])
    return ( 
        user ? 
        <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img src={user.image} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href={`/editprofile/${_id}`} class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">{user.name}</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{user.email}</p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fa fas fa-image mr-1"></i>Posts</small>
                    </li>
                       <li>
                       <a href="/articals" class="btn btn-outline-dark btn-sm btn-block">add posts</a>

                       </li>
                      
                </ul>
            </div>
            
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent Posts</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 mb-2 pl-lg-1"><img src="" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pr-lg-1 mb-2"><img src="" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pl-lg-1"><img src="" alt="" class="img-fluid rounded shadow-sm"/></div>
                </div>
            </div>
        </div>
    </div>
</div> : <div> Loading .. </div> 
    )};

