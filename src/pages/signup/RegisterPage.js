import React from 'react';
import AuthFormContainer from '../../components/auth/AuthFormContainer';
import RegisterPageStyled from './RegisterPageStyled';

const LoginPage = () => {
    return (
        <RegisterPageStyled className="sectionLoginPage">
            <div className="container">
                <div className="wrapLoginPage">
                    <AuthFormContainer />
                </div>
            </div>
        </RegisterPageStyled>
    );
};

export default LoginPage;
