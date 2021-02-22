import React from 'react';
import mainRoutes from '../../routes/routes';
import NavigationItem from '../navigation/NavigationItem';
import BurgerMenuStyled from './BurgerMenuStyled';

const BurgerMenu = ({ click }) => {
    return (
        <BurgerMenuStyled click>
            <div className="overlay">
                <ul className="burgerNavList">
                    {mainRoutes.map(route => (
                        <NavigationItem {...route} key={route.path} />
                    ))}
                </ul>
            </div>
        </BurgerMenuStyled>
    );
};

export default BurgerMenu;
