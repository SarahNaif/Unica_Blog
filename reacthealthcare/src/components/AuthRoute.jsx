import React from 'react'
import { Route, Redirect } from "react-router-dom";
export default function AuthRoute(props) {
    if (props.auth.isLoggedIn) {
        return (
         <h1>You are in </h1>
        );
      } else {
        return (
          <Route>
            <Redirect to="/" />
          </Route>
        );
      }
    }