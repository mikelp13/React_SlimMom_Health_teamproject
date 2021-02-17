import React from 'react';
import AuthFormContainer from '../../components/auth/AuthFormContainer';
import LoginPageStyled from './LoginPageStyled';

const LoginPage = () => {
    return (
        <LoginPageStyled className="sectionLoginPage">
            <div className="container">
                <div className="wrapLoginPage">
                    <AuthFormContainer />
                </div>
            </div>
        </LoginPageStyled>
    );
};

export default LoginPage;
