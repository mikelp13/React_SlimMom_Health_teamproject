import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import RegisterPageStyled from './RegisterPageStyled';

const LoginPage = () => {
    return (
        <RegisterPageStyled className="sectionLoginPage">
            <div className="container">
                <div className="wrapLoginPage">
                    <AuthForm />
                </div>
            </div>
        </RegisterPageStyled>
    );
};

export default LoginPage;
