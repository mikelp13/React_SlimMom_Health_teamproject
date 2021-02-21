import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, } from 'react-router-dom';
import { logoutOperations } from '../../redux/auth/authOperations';
import strip from '../../assets/img/logo/strip.png';
import UserMenuStyled from './UserMenuStyled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.user.username);
    const history = useHistory();
    const location = useLocation();

    const handelBack = () => {
        history.goBack();
    };

    const onHandleLogout = () => {
        dispatch(logoutOperations());
    };
    return (
        <UserMenuStyled>
            {(
                location.pathname === '/diary/product') && (
                <button type="button" onClick={handelBack}>
                    <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                            stroke="black"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
            )}
            <div className="userContainer">
            <p className="userName">{username}</p>
            <img src={strip} alt="strip"></img>
            <button type="button" onClick={onHandleLogout}>
                Выйти
            </button>
            </div>
        </UserMenuStyled>
    );
};

export default UserMenu;
