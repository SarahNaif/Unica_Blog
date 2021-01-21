import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import AllArticales from "./components/AllArticales"
import SignUp from './components/SignUp';
import Login from "./components/LogIn";
function App() {
  return (


   <Router>
    <NavBar />
    <Route exact path="/articles">
          <AllArticales />
          </Route>


    <Route path="/SignUp">
      <SignUp />
     </Route>

     <Route path="/login">
            <Login />
          </Route>

    <Route exact path="/">
    </Route>
   
    </Router>

  );
} 

export default App;
