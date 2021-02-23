import React from 'react'
import useWindowSize from '../../../hooks/useWindowSize';
import logo from '../../../assets/img/logo/logo.png'
import logoWhite from '../../../assets/img/logo/logo123.png'
import { Link } from "react-router-dom";
import LogoStyled from './LogoStyled'
import { useSelector } from 'react-redux';

const Logo = () => {
  const isAuth = useSelector((state) => state.auth.user.isAuth);
  const size = useWindowSize();

    return (
       <LogoStyled>
    {isAuth ? <Link id="RouterNavLink"  className='logo' to='/diary' >
      {localStorage.getItem('theme') === 'dark' ?
        <img src={logoWhite} alt='logo' width='46' height='43.36'></img>
        :
        <img src={logo} alt='logo' width='46'></img>}
      {((size.width > 767) || (size.width < 767 && isAuth)) &&(<p>Slim<span>Mom</span></p>)} 
    </Link> :
    <Link className='logo' to='/'>
    {localStorage.getItem('theme') === 'dark' ?
      <img src={logoWhite} alt='logo' width='46' height='43.36'></img>
      :
      <img src={logo} alt='logo' width='46'></img>}
        {((size.width > 767) || (size.width < 767 && isAuth)) &&(<p>Slim<span>Mom</span></p>)} 
  </Link>        
   }     
   </LogoStyled>
    
    )
}

export default Logo 