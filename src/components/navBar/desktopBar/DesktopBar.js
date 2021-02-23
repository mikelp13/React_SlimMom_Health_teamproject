import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../../navigation/Navigation';
import UserMenu from '../../userMenu/UserMenu';
import DesktopBarStyled from './DesktopBarStyled';
import Logo from '../logo/Logo';
import strip from '../../../assets/img/logo/strip.png';

const DesktopBar = () => {
    const isAuth = useSelector(state => state.auth.user.isAuth);
    return (
        <DesktopBarStyled>
            <div className="leftSide">
                <Logo />
                <img src={strip} alt="strip" />
                <Navigation />
            </div>
            {isAuth && <UserMenu />}
        </DesktopBarStyled>
    );
};

export default DesktopBar;
