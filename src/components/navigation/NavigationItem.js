import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavigationItemStyled from "./NavigationItemStyled";


const NavigationItem = ({  path, name, exact, isPrivate, restricted }) => {
  const isAuth = useSelector((state) => state.auth.user.isAuth);
    return (
      
    <NavigationItemStyled>
      {!isPrivate && !restricted && (
        <li  key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navlink" activeClassName="navlink-active">
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navlink" activeClassName="navlinkActive">
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li  key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navlink" activeClassName="navlinkActive">
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </NavigationItemStyled>
  );
};

   
    
    export default NavigationItem
