import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    refreshTokenOperation,
    getCurrentUser,
} from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import { useDarkMode } from './themes/useDarkMode';
import { ThemeProvider } from 'styled-components';
import Media from 'react-media';
import AppBar from './appBar/AppBar';
import mainRoutes from '../routes/routes';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import DefaultPage from '../pages/default/DefaultPage';

import Notice from './notice/Notice';
import { getShowNotice } from '../redux/notice/noticeSelectors';
import LoadSpinner from './loader/Loader';
import { GlobalStyles } from './themes/globalStyles';
import { lightTheme, darkTheme } from './themes/Themes';
import ThemeToggle from './themes/themeToggle/ThemeToggle';

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const showNotice = useSelector(getShowNotice);
    const isloading = useSelector(authSelectors.isLoading);

    useEffect(() => {
        !isAuth && history.push('/');
        isAuth && history.push('/calculator');
    }, [isAuth, history]);

    const initialAction = async () => {
        try {
            await dispatch(refreshTokenOperation());
            await dispatch(getCurrentUser());
        } catch (error) {
            return;
        }
    };

    useEffect(() => {
        isAuth && initialAction();
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div>
                <Media queries={{ desktop: '(min-width: 1280px)' }}>
                    {matches =>
                        matches.desktop && (
                            <ThemeToggle theme={theme} toggler={themeToggler} />
                        )
                    }
                </Media>
                <AppBar theme={theme} toggler={themeToggler} />
                <CSSTransition
                    in={showNotice}
                    timeout={250}
                    classNames="my-notice"
                    unmountOnExit
                >
                    <Notice />
                </CSSTransition>
                {isloading && <LoadSpinner />}
                {
                    <Suspense fallback={<LoadSpinner />}>
                        <Switch>
                            {mainRoutes.map(route =>
                                route.isPrivate ? (
                                    <PrivateRoutes
                                        {...route}
                                        key={route.path}
                                    />
                                ) : (
                                    <PublicRoutes {...route} key={route.path} />
                                ),
                            )}
                            <Route component={DefaultPage} />
                        </Switch>
                    </Suspense>
                }
            </div>
        </ThemeProvider>
    );
};

export default App;
