import React from "react";
import  mainRoutes  from "../../routes/routes";
import NavigationItem from "./NavigationItem";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
 
  return (
    <>
    
      <NavigationStyled className='navList'>
        {mainRoutes.map((route) => (
          <NavigationItem {...route}  key={route.path} />
        ))}
      </NavigationStyled>
      
    </>
  );
};

export default Navigation
