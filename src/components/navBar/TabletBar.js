import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'
import BurgerIcon from '../icon/BurgerIcon';
import Cross from '../icon/CrossIcon';
import Modal from '../modal/Modal';

const TabletBar = () => {
    const [click, setClick] = useState(false)
    //const [openModal, setOpenModal] = useState(true)
    const isAuth = useSelector((state) => state.auth.user.isAuth);
    const onHandelClick = () => 
    setClick(!click)
    //setOpenModal(!openModal)
  

    return (
        <>
    {isAuth &&  <UserMenu/>}
    { isAuth ? <button onClick={onHandelClick}> {click ? ( <Cross width={15}/>  )  :
           <BurgerIcon width={30} />
           }
    </button> : <Navigation/>}
   {click && <Modal/>}
        </>
    )
}

export default TabletBar

/*import React from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'

const DesktopBar = () => {
    const isAuth = useSelector((state) => state.auth.user.isAuth);
    return (
        <>
             
    <Navigation/>
    {isAuth &&  <UserMenu/>}
        </>
    )
}

export default DesktopBar
*/