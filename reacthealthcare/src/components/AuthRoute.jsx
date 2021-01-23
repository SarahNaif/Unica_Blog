import React from 'react'
import { Route, Redirect } from "react-router-dom";
import UserProfile from "./UserProfile"
export default function AuthRoute(props) {
    if (props.auth.isLoggedIn) {
        return (
          <Route>
          <UserProfile
            setAuth={props.setAuth}
            auth = {props.auth} />
        </Route>
        );
      } else {
        return (
          <Route>
            <Redirect to="/" />
          </Route>
        );
      }
    }