import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({component:Needy, ...res}) => {
  
  console.log(Auth.isAuth())
  if (!Auth.isAuth()) {
    return <Redirect to="/"/>;
  }

  return (
  <Route
  {...res}
  render={props =><Needy {...props} />
  }/>
  )
};

export default PrivateRoute;
