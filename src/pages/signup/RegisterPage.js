import React from 'react';
import RegisterPageStyled from './RegisterPageStyled';

const LoginPage = () => {
    return (
        <RegisterPageStyled className="sectionLoginPage">
            <div className="container">
                <div className="wrapLoginPage">
                    <div className="wrapForm">
                        <h2 className="titleLoginPage">ВХОД</h2>
                        <form className="formLoginPage">
                            <label className="labelLoginPage">
                                Имя *
                                <input type="text" className="inputLoginPage" />
                            </label>
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
                    <div className="wrapBtn">
                        {/* <button className="mainButton">Регистрация</button> */}
                        <button className="secondButton">Регистрация</button>
                    </div>
                </div>
            </div>
        </RegisterPageStyled>
    );
};

export default LoginPage;
