import React from "react";
import {  useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const PrivateRoutes = ({ path, exact, component }) => {
    const isAuth = useSelector((state) => state.auth.user.isAuth);
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/signin' />
  );
};

   
    
    export default PrivateRoutes