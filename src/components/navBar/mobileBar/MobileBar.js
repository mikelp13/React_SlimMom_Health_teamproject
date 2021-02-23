import React from 'react'
import { useSelector } from 'react-redux';
import BurgerIcon from '../../icon/BurgerIcon';
import Cross from '../../icon/CrossIcon';
import Navigation from '../../navigation/Navigation';
import UserMenu from '../../userMenu/UserMenu';
import { useMediaQuery } from 'react-responsive'
import Logo from '../logo/Logo';
import MobileBarStyled from './MobileBarStyled'
import BurgerMenu from '../../burgerMenu/BurgerMenu';

const MobileBar = ({click, onClick}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' })   
  const isAuth = useSelector((state) => state.auth.user.isAuth);

     return (
        <MobileBarStyled click>
        <div className='upperPart'>
         <Logo/>    
       {isTabletOrMobile && isAuth ? <button type='button' onClick={onClick}> {click ? <><Cross width={15}/>  <BurgerMenu click/> </>
       : <BurgerIcon width={24} />} </button> : <Navigation/>}
       </div>
       {isAuth &&  <div className='bottomPart'>
     <UserMenu/>
     </div> }
        </MobileBarStyled>
    )
}

export default MobileBar


