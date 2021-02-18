import { lazy } from 'react';

const mainRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() =>
            import('../pages/home/HomePage' /* webpackChunkName: "HomePage"*/),
        ),
        isPrivate: false,
        restricted: false,
    },
    {
        path: '/signin',
        name: 'Вход',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/signin/LoginPage' /* webpackChunkName: "SignInPage"*/
            ),
        ),
        isPrivate: false,
        restricted: true,
    },
    {
        path: '/signup',
        name: 'Регистрация',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/signup/RegisterPage' /* webpackChunkName: "SignUpPage"*/
            ),
        ),
        isPrivate: false,
        restricted: true,
    },
  
    {
        path: '/calculator',
        name: 'Калькулятор',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/calculator/CalculatorPage' /* webpackChunkName: "CalculatorPage"*/
            ),
        ),
        isPrivate: true,
        restricted: false,
    },
    {
        path: '/diary',
        name: 'Дневник',
        exact: false,
        component: lazy(() =>
            import(
                '../pages/diary/DiaryPage' /* webpackChunkName: "DiaryPage"*/
            ),
        ),
        isPrivate: true,
        restricted: false,
    },
];
export default mainRoutes;
