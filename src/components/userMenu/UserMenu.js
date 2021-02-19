import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserMenuStyled from './UserMenuStyled';
import {logoutOperations} from '../../redux/auth/authOperations';
import strip from '../../assets/img/logo/strip.png'

const UserMenu = () => {
    const dispatch = useDispatch();
    const onHandleLogout = () => {
        dispatch(logoutOperations());
    };
    const username = useSelector((state) => state.auth.user.username);
    
    return (
        <UserMenuStyled>
             
            <p className="userName">{username}</p>
            <img src={strip} alt='strip'></img>
            <button type='button' onClick={onHandleLogout}>Выйти</button>
            </UserMenuStyled>
    )
}

export default UserMenu