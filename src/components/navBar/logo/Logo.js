import React from 'react'
import logo from '../../../assets/img/logo/logo.png'
import { Link } from "react-router-dom";
import LogoStyled from './LogoStyled'
import { useSelector } from 'react-redux';

const Logo = () => {
  const isAuth = useSelector((state) => state.auth.user.isAuth);

    return (
       <LogoStyled>
    {isAuth ? <Link id="RouterNavLink"  className='logo' to='/calculator' >
      <img src={logo} alt='logo' width='46'></img>
      <p>Slim<span>Mom</span></p>
    </Link> :
    <Link className='logo' to='/'>
    <img src={logo} alt='logo' width='46'></img>
    <p>Slim<span>Mom</span></p>
  </Link>        
   }     
   </LogoStyled>
    
    )
}

export default Logo 
