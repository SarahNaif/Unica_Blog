import React, { useState, useEffect } from "react";
import { useHistory ,Link} from "react-router-dom";
import axios from "axios";
import "./Signup.css"
export default function EditProfile(props) {
    const { _id} = props.auth.currentUser;
    const history = useHistory();
    const [user, setUser] = useState({});
    const [fields, setFields] = useState({ name: "", email: "" , image :"" });


  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const onSubmit=(event)=>{
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/user/editprofile/${_id}`, fields)
      .then((res) => {
          console.log(res)
          history.push("/profile");
        
      })
      .catch((err) => console.log(err));
  }
     //   axios.put("http://localhost:5000/api/user/editprofile/:id")
    return (
        <>
        <div class="signup-form">
        
         
        <form >
          <h2>Edit Profile</h2>
          <div className="form-group">
              <input type="name" className="form-control" name="name" placeholder="Your name" required="required" onChange={(e) => onChangeInput(e)}/>
          </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={(e) => onChangeInput(e)}/>
          </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => onChangeInput(e)} />
               </div>
                
                 <div className="form-group">
                  <input type="text" className="form-control" name="image" placeholder="Enter Images" required="required" onChange={(e) => onChangeInput(e)}/>
                 </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary btn-lg w-100" onClick={(e)=> onSubmit(e)}>Edit Profile</button>
                    </div>
       </form>
                  <div class="text-center">Return To the profile page? <Link to="/login"> </Link></div>
          </div>  
      </>
    )
}
