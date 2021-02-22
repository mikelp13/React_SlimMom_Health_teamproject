import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../../navigation/Navigation'
import UserMenu from '../../userMenu/UserMenu'
import BurgerIcon from '../../icon/BurgerIcon';
import Cross from '../../icon/CrossIcon';
import Logo from '../logo/Logo';
import TabletBarStyled from './TabletBarStyled';
import BurgerMenu from '../../burgerMenu/BurgerMenu';

const TabletBar = () => {
    const [click, setClick] = useState(false)
    const isAuth = useSelector((state) => state.auth.user.isAuth);
    const onHandelClick = () => 
    setClick(prev => !prev)
    
      return (
        <TabletBarStyled>
         <Logo/>  
         <div className='rightSide'>  
    {isAuth &&  <UserMenu/>}
    { isAuth ? <button className='burger' onClick={onHandelClick}> {click ? (<><Cross width={15}/> <BurgerMenu/> </>  )  :
           <BurgerIcon width={24} />
           }
    </button> : <Navigation/>}
    </div>  
        </TabletBarStyled>
    )
}

export default TabletBar
