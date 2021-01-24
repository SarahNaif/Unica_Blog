import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Profile from './Profile';

export default function AuthRoute(props) {
    if (props.auth.isLoggedIn) {
        return (
          <Route>
          <Profile
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