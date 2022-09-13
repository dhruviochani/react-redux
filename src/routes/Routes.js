import React, { Suspense, useEffect } from "react";
import {
  Router,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../utils/PrivateRoute";
import store from "../store";
import { setCurrentLang } from "../store/Lang/LangAction";

const Routes = () => {
  const location = useLocation();
  const History = useHistory();


  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <Switch>
          <LazyComponent.Login path="/" exact />
          <PrivateRoute component={LazyComponent.Needy} path="/needy" exact />
          <PrivateRoute component={LazyComponent.Dashboard} path="/dashboard" exact />
          <Redirect from="**" to={`/`} exact />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
