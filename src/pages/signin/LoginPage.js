import React from 'react';
import LoginPageStyled from './LoginPageStyled';

const LoginPage = () => {
    return (
        <div className="container">
            <LoginPageStyled>
                <h2 className="titleLoginPage">ВХОД</h2>
                <div className="wrapLoginPage">
                    <form className="formLoginPage">
                        <label className="labelLoginPage">
                            Логин *
                            <input type="text" className="inputLoginPage" />
                        </label>
                        <label className="labelLoginPage">
                            Пароль *
                            <input type="text" className="inputLoginPage" />
                        </label>
                    </form>
                </div>
                <div className="btnWrapLoginPage">
                    <button className="mainButton">Вход</button>
                    <button className="secondButton">Регистрация</button>
                </div>
            </LoginPageStyled>
        </div>
    );
};

export default LoginPage;
