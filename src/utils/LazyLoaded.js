import React from "react";

// export const Home = React.lazy(() => import('../containers/Home/Home'));
export const Dashboard = React.lazy(()=> import('../containers/dashboard/dashboard'));
export const Login = React.lazy(() => import('../containers/Login/Login'));
export const Needy = React.lazy(() => import('../containers/Needy/Needy'))
export const NotFound = React.lazy(() => import('../components/NotFound/NotFound'));
export const Resources= React.lazy(()=> import('../containers/resources/resources'));
