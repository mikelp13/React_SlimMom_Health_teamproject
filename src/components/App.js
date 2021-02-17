import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import { ThemeProvider } from "styled-components";
import LoginPage from '../pages/signin/LoginPage';
// import Modal from './modal/Modal';
// import RegisterPage from '../pages/signup/RegisterPage';
import { GlobalStyles } from './themes/globalStyles';
import { lightTheme, darkTheme } from './themes/Themes';
import ThemeToggle from './themes/themeToggle/ThemeToggle';
import CalculatorPage from '../pages/calculator/CalculatorPage';
import HomePage from '../pages/home/HomePage';
// import Basic from './test';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {   
    theme === 'light' ? setTheme('dark') : setTheme('light')    
    }

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <div>
                <ThemeToggle toggler={themeToggler}/>
                {/* <Basic /> */}
                <HomePage />
                <LoginPage />
                <CalculatorPage />
            </div>
        </ThemeProvider>
    );
};

export default App;
