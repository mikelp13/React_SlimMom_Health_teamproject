import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BurgerIcon from '../../icon/BurgerIcon';
import Cross from '../../icon/CrossIcon';
import Navigation from '../../navigation/Navigation';
import UserMenu from '../../userMenu/UserMenu';
import { useMediaQuery } from 'react-responsive'
import Logo from '../logo/Logo';
import MobileBarStyled from './MobileBarStyled'
import BurgerMenu from '../../burgerMenu/BurgerMenu';

const MobileBar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' })   
  const [click, setClick] = useState(false)
  const isAuth = useSelector((state) => state.auth.user.isAuth);
  const onHandelClick = () => 
  setClick(prev => !prev)
 
    return (
        <MobileBarStyled>
        <div className='upperPart'>
         <Logo/>    
       {isTabletOrMobile && isAuth ? <button type='button' onClick={onHandelClick}> {click ? <><Cross width={15}/>  <BurgerMenu/> </>
       : <BurgerIcon width={24} />} </button> : <Navigation/>}
       </div>
       {isAuth &&  <div className='bottomPart'>
     <UserMenu/>
     </div> }
        </MobileBarStyled>
    )
}

export default MobileBar


