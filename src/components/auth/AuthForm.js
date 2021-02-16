import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    signUpOperation,
    signInOperation,
    logoutOperations,
} from '../../redux/auth/authOperations';
import AuthFormStyled from './AuthFormStyled';

const initialState = {
    email: '',
    password: '',
};

const AuthForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [user, setUser] = useState({ ...initialState });
    const [name, setName] = useState('');

    const onHandleChange = e => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const onHandleChangeName = e => {
        setName(e.target.value);
    };

    const onHandleSubmit = e => {
        e.preventDefault();

        if (location.pathname === '/signup') {
            dispatch(signUpOperation({ ...user, username: name }));
        } else dispatch(signInOperation(user));

        setUser({ ...initialState });
        setName('');
    };
    // !========== Это нужно будет убрать ==============
    const onHandleLogout = () => {
        dispatch(logoutOperations());
    };

    // !=================================================
    const { email, password } = user;

    return (
        <AuthFormStyled>
            <h2 className="authFormTitle">
                {location.pathname === '/signup' ? 'регистрация' : 'вход'}
            </h2>
            <form onSubmit={onHandleSubmit} className="authForm">
                {location.pathname === '/signup' && (
                    <label className="authFormFild">
                        <span className="authFormText">
                            Имя <sup className="authFormStar">*</sup>
                        </span>
                        <input
                            className="authFormInput"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onHandleChangeName}
                        ></input>
                    </label>
                )}
                <label className="authFormFild">
                    <span className="authFormText">
                        E-mail <sup className="authFormStar">*</sup>
                    </span>

                    <input
                        className="authFormInput "
                        type="email"
                        name="email"
                        value={email}
                        onChange={onHandleChange}
                    />
                </label>
                <label className="authFormFild">
                    <span className="authFormText">
                        Пароль <sup className="authFormStar">*</sup>
                    </span>

                    <input
                        className="authFormInput"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onHandleChange}
                    />
                </label>

                <button className="mainButton authFormBtn" type="submit">
                    {location.pathname === '/signup' ? 'Регистрация' : 'Вход'}
                </button>
            </form>
            {/* // !========== Это нужно будет убрать ============== */}
            <button onClick={onHandleLogout} type="button">
                Logout
            </button>

            {/* // !============================================ */}
        </AuthFormStyled>
    );
};

export default AuthForm;
