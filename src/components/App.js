import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import { useDarkMode } from './themes/useDarkMode';
import { ThemeProvider } from "styled-components";
// import LoginPage from '../pages/signin/LoginPage';
import AppBar from './appBar/AppBar';
import mainRoutes from '../routes/routes'
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import DefaultPage from '../pages/default/DefaultPage';
import CalculatorPage from '../pages/calculator/CalculatorPage';

// import Modal from './modal/Modal';

// import RegisterPage from '../pages/signup/RegisterPage';
import { GlobalStyles } from './themes/globalStyles';
import { lightTheme, darkTheme } from './themes/Themes';
import ThemeToggle from './themes/themeToggle/ThemeToggle';
//import CalculatorPage from '../pages/calculator/CalculatorPage';
//import HomePage from '../pages/home/HomePage';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <div>
                <ThemeToggle theme={theme} toggler={themeToggler}/>
                {/* <Basic /> */}
                <AppBar/>
                {<Suspense fallback={<h2>...loading</h2>}>
            <Switch>
              {mainRoutes.map((route) =>
                route.isPrivate ? (
                  <PrivateRoutes    {...route}  key={route.path} />
                ) : (
                  <PublicRoutes  {...route}  key={route.path} />
                )
              )}
              <Route component={CalculatorPage} />
              <Route component={DefaultPage} />
            </Switch>
                </Suspense>}
                {/*<LoginPage />*/}
                {/*<HomePage />
                <CalculatorPage />*/}
            </div>
        </ThemeProvider>
    );
};

export default App;
