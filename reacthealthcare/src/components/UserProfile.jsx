
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserProfile(props) {

    const { name, email , image , _id} = props.auth.currentUser;



    
    // const [user , setUser] = useState({})
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/user/profile?id=${_id}`)
    //       .then(data => {
    //        console.log(data)
    //        setUser(data.data.user)

    //       })
    
    //   }, [])



    return (
        <>
        <div>
          <h1 style={{color:"white"}}> Hello from user {name} , {email} profile </h1>  
            
        </div>
        <div>
            <img src={image} alt=""/>
        </div>
        </>
    
    )
}

