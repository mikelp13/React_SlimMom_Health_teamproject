import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import LoginPage from '../pages/signin/LoginPage';
import AppBar from './appBar/AppBar';
import mainRoutes from '../routes/routes'
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import DefaultPage from '../pages/default/DefaultPage';
import CalculatorPage from '../pages/calculator/CalculatorPage';
import DiaryProductsList from './DiaryProductsList/DiaryProductsList';


// import Modal from './modal/Modal';

// import RegisterPage from '../pages/signup/RegisterPage';

//import CalculatorPage from '../pages/calculator/CalculatorPage';
//import HomePage from '../pages/home/HomePage';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);

    return (
        <div>

            {/* <Basic /> */}
            <AppBar />
            {<Suspense fallback={<h2>...loading</h2>}>
                <Switch>

                    {mainRoutes.map((route) =>
                        route.isPrivate ? (
                            <PrivateRoutes    {...route} key={route.path} />
                        ) : (
                                <PublicRoutes  {...route} key={route.path} />
                            )
                    )}
                    <Route component={CalculatorPage} />
                    <Route component={DefaultPage} />
                </Switch>
            </Suspense>}
            <DiaryProductsList />
            {/*<LoginPage />*/}

            {/*<HomePage />

           
            <CalculatorPage />*/}

        </div>
    );
};

export default App;
