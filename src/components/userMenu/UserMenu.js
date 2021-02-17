import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserMenuStyled from './UserMenuStyled';
import {logoutOperations} from '../../redux/auth/authOperations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const onHandleLogout = () => {
        dispatch(logoutOperations());
    };
    const username = useSelector((state) => state.auth.user.username);
    
    return (
        <UserMenuStyled>
             
            <p>{username}</p>
            <span>|</span>
            <button type='button' onClick={onHandleLogout}>Выйти</button>
            </UserMenuStyled>
    )
}

export default UserMenu