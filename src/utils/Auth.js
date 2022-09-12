import { Redirect } from "react-router-dom";
import React from "react";
// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    localStorage.removeItem("token");
    return(<Redirect to={'/'}/>)
  },
  isAuth() {
    return localStorage.getItem("token");
  }
};
export default Auth;
