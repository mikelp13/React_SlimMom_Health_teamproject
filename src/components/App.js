import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import AuthForm from './auth/AuthForm';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    useEffect(() => {
        console.log(isAuth);
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <h2>HEALTH</h2>
            <AuthForm />
        </div>
    );
};

export default App;
