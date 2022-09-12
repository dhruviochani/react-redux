import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({ component: Needy, ...rest }) => {
  const {
    lang,
  } = useSelector((state) => state);

  console.log(Auth.isAuth())
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        Auth.isAuth() ? <Needy {...props} /> : <Redirect to={`/`} />
      }
    />
  );
};

export default PrivateRoute;
