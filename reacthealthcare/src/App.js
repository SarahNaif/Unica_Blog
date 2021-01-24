
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import AllArticales from "./components/AllArticales"
import SignUp from './components/SignUp';
import Login from "./components/LogIn";
import Profile from "./components/Profile";
import AuthRoute from "./components/AuthRoute"
import EditProfile from './components/EditProfile';

function App() {
  const [dataLoading, setDataloading] = useState(false)
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    setDataloading(true)
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);
  return (
    <div className="">
    { dataLoading &&
   <Router>
    <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} />

    
    <Route path="/profile">
            <AuthRoute 
            setAuth = {setAuth}
            auth={auth} />
          </Route>

    <Route path = "/editprofile/:id">
      <EditProfile 
      auth={auth} />
    </Route>



    <Route exact path="/articles">
          <AllArticales />
          </Route>

    
    
   <Route path="/login" >
        <Login loginCallback={userLogin}/>
    </Route>


    <Route path="/SignUp" >
      <SignUp loginCallback={userLogin} />
     </Route>


    <Route exact path="/">
    </Route>
   
    </Router>
    }
    </div>
  );
} 

export default App;
