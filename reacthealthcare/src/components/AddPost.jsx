
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory , Link} from "react-router-dom";
export default function AddPost(props) {


  /* =================
     Hooks State  
     ================= */

  const { _id} = props.auth.currentUser;
  const history = useHistory();
  const [post, setPost] = useState({ title: "", description: "" , markdown :"" , userId: _id });


 /* =================
     Functions Handler 
     ================= */

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  // ==========================================
  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(post)
    axios
      .post("http://localhost:5000/api/articles/new ", post)
      .then((res) => {
          console.log(res)
          history.push("/profile");
      })
      .catch((err) => console.log(err));
  }
  // =============================================



   /* ===================
     Form to add new post  
     =================== */
    return (
        <>

    <div class="signup-form">
        
         
    <form >

          <h2>Add Post</h2>
          <div className="form-group">
              <input type="text" className="form-control" name="title" id="title" onChange={(e) => onChangeInput(e)}/>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1" name ="type"  onChange={(e) => onChangeInput(e)}>
            <option>Sports</option>
            <option>Foods</option>
            <option>Mental Health</option>
     
          </select>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" onChange={(e) => onChangeInput(e)}></textarea>
          </div>

          <div class="form-group">
             <label for="markdown">Content</label>
             <textarea required name="markdown" id="markdown" class="form-control" onChange={(e) => onChangeInput(e)}></textarea>
          </div>

          <div className="form-group text-center">
              <button type="submit" className="btn btn-primary btn-lg w-100" onClick={(e)=> onSubmit(e)}>Create Post</button>
          </div>

    </form>
                  {/* <div class="text-center">Return To the profile page? <Link to="/login"> </Link></div> */}
    </div>  
      </>
    )
    
}