import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "../containers/dashboard/dashboard";
import Auth from "../utils/Auth";

const PrivateRoute = ({component:Comp, ...res}) => {
  
  console.log(Auth.isAuth())
  if (!Auth.isAuth()) {
    return <Redirect to="/"/>;
  }

  return (
  <Route
  {...res}
  render={props =><Comp {...props} />
  }/>
  )
};

export default PrivateRoute;
