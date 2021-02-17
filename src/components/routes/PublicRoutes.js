import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const PublicRoutes = ({ path, exact, component, restricted}) => {
    const isAuth = useSelector((state) => state.auth.user.isAuth);
  return isAuth && restricted ? (
    <Redirect to='/diary' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

   
    
    export default PublicRoutes