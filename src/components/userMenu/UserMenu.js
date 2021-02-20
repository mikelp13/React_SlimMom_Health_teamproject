import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserMenuStyled from './UserMenuStyled';
import { logoutOperations } from '../../redux/auth/authOperations';
import strip from '../../assets/img/logo/strip.png';
import sprite from '../../assets/sprite.svg';
import { useHistory, useLocation } from 'react-router-dom';

const UserMenu = () => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.user.username);
    const history = useHistory();
    const location = useLocation();

    const handelBack = () => {
        history.goBack();
    };
    // const handleBack = e => {
    //     setState(prev => ({ ...prev, productId: e.target.id }));
    // };
    const onHandleLogout = () => {
        dispatch(logoutOperations());
    };
    return (
        <UserMenuStyled>
            <button type="button" onClick={handelBack}>
                <svg width="25px" height="25px">
                    <use href={sprite + '#icon-back'} />
                </svg>
            </button>
            <p className="userName">{username}</p>
            <img src={strip} alt="strip"></img>
            <button type="button" onClick={onHandleLogout}>
                Выйти
            </button>
        </UserMenuStyled>
    );
};

export default UserMenu;
