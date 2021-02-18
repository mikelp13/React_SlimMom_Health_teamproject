import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import AppBar from './appBar/AppBar';
import mainRoutes from '../routes/routes';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import DefaultPage from '../pages/default/DefaultPage';
import CalculatorPage from '../pages/calculator/CalculatorPage';
import Notice from './notice/Notice';
import { getShowNotice } from '../redux/notice/noticeSelectors';

// import Modal from './modal/Modal';

// import RegisterPage from '../pages/signup/RegisterPage';

//import CalculatorPage from '../pages/calculator/CalculatorPage';
//import HomePage from '../pages/home/HomePage';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const showNotice = useSelector(getShowNotice);

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <AppBar />

            <CSSTransition
                in={showNotice}
                timeout={250}
                classNames="my-notice"
                unmountOnExit
            >
                <Notice />
            </CSSTransition>
            {
                <Suspense fallback={<h2>...loading</h2>}>
                    <Switch>
                        {mainRoutes.map(route =>
                            route.isPrivate ? (
                                <PrivateRoutes {...route} key={route.path} />
                            ) : (
                                <PublicRoutes {...route} key={route.path} />
                            ),
                        )}
                        <Route component={CalculatorPage} />
                        <Route component={DefaultPage} />
                    </Switch>
                </Suspense>
            }
            {/*<LoginPage />*/}

            {/*<HomePage />

           
            <CalculatorPage />*/}
        </div>
    );
};

export default App;
