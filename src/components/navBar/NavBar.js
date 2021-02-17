import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BurgerIcon from '../icon/BurgerIcon';
import Cross from '../icon/CrossIcon';
import Modal from '../modal/Modal';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import NavBarStyled from "./NavBarStyled";
import icons from '../../assets/sprite.svg'

const NavBar = () => {
      
  const [click, setClick] = useState(false)
  const isAuth = useSelector((state) => state.auth.user.isAuth);
  const onHandelClick = () => 
  setClick(prev => !prev)
 
    return (
        <NavBarStyled>
       {window.innerWidth < 1279 && isAuth ? <button type='button' onClick={onHandelClick}> {click ? <><Cross width={15}/>  <Modal/> </>
       : <BurgerIcon width={30} />} </button> : <Navigation/>}

    {/*window.innerWidth < 1279 && isAuth ? <button onClick={onHandelClick}> {click ? <Modal/> 
       : <BurgerIcon width={30} />} </button>  :
    <Navigation/>*/} 
   
     {/*click && <Cross width={15}/>*/}
     {isAuth &&  <UserMenu/>}
        </NavBarStyled>
    )
}

export default NavBar


