import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import LoginPageStyled from './LoginPageStyled';

const LoginPage = () => {
    return (
        <LoginPageStyled className="sectionLoginPage">
            <div className="container">
                <div className="wrapLoginPage">
                    <AuthForm />
                </div>
            </div>
        </LoginPageStyled>
    );
};

export default LoginPage;
