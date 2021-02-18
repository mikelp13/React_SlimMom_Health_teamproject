import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import AppBar from './appBar/AppBar';
import mainRoutes from '../routes/routes';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import DefaultPage from '../pages/default/DefaultPage';
import Notice from './notice/Notice';
import { getShowNotice } from '../redux/notice/noticeSelectors';
import LoadSpinner from './loader/Loader';
import { getDayInfoOperation } from '../redux/diary/diaryOperations';

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const showNotice = useSelector(getShowNotice);
    
    useEffect(() => {
        !isAuth && history.push('/');
        isAuth && history.push('/calculator');
    }, [isAuth, history]);

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        isAuth && dispatch(getDayInfoOperation());
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
                <Suspense fallback={<LoadSpinner/>}>
                    <Switch>
                        {mainRoutes.map(route =>
                            route.isPrivate ? (
                                <PrivateRoutes {...route} key={route.path} />
                            ) : (
                                <PublicRoutes {...route} key={route.path} />
                            ),
                        )}
                        <Route component={DefaultPage} />
                    </Switch>
                </Suspense>
            }
        </div>
    );
};

export default App;
