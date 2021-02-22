import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavigationItemStyled from "./NavigationItemStyled";



const NavigationItem = ({ path, name, exact, isPrivate, restricted }) => {
  const isAuth = useSelector((state) => state.auth.user.isAuth);
  return (

    <>

      {isAuth && isPrivate && !restricted && (
        <NavigationItemStyled key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navlink" activeClassName="navlinkActive">
            {name.toUpperCase()}
          </NavLink>
        </NavigationItemStyled>
      )}

      {!isAuth && !isPrivate && restricted && (
        <NavigationItemStyled key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navlink" activeClassName="navlinkActive">
            {name.toUpperCase()}
          </NavLink>
        </NavigationItemStyled>
      )}

    </>

  );
};

export default NavigationItem
