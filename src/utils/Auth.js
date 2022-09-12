import { Redirect } from "react-router-dom";
import React from "react";
import History from "../routes/History";
import { Route } from "react-router-dom";
// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    localStorage.clear();
    return(
      History.goBack()
      )
  },
  isAuth(){
    if(localStorage.token){
        return true;
    } else {
        return false;
    }
}
};
export default Auth;
