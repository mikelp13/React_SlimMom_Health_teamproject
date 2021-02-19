import React from 'react'
import mainRoutes from '../../routes/routes'
import NavigationItem from '../navigation/NavigationItem'
import BurgerMenuStyled from './BurgerMenuStyled'

const BurgerMenu = () => {
    return (
        <BurgerMenuStyled>
             
            <div className='overlay' >
            {mainRoutes.map((route) => (
          <NavigationItem {...route}  key={route.path} />
        ))}
      </div>
        </BurgerMenuStyled>
    )
}

export default BurgerMenu


