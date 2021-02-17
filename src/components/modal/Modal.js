import React, { useState } from 'react'
import mainRoutes from '../../routes/routes'
import BurgerIcon from '../icon/BurgerIcon'
import Cross from '../icon/CrossIcon'
import NavigationItem from '../navigation/NavigationItem'
import ModalStyled from './ModalStyled'

const Modal = () => {
    const [click, setClick] = useState(false)
    //const [openModal, setOpenModal] = useState(false)
    //const isAuth = useSelector((state) => state.auth.user.isAuth);
    //const onHandelClick = () => 
    //setClick(!click)
    return (
        <ModalStyled>
              {/*<button onClick={onHandelClick}> {click ?  <Cross width={25}/>  :
           <BurgerIcon width={30} />}
    </button> */}
            <div className='overlay' >
            {mainRoutes.map((route) => (
          <NavigationItem {...route}  key={route.path} />
        ))}
      </div>
        </ModalStyled>
    )
}

export default Modal


