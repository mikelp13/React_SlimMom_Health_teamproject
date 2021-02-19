import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {
    getCurrentUser,
    signInOperation,
    signUpOperation,
} from '../../redux/auth/authOperations';
import { dailyRateAuthOperation } from '../../redux/dailyRate/dailyRateOperations';
import AuthForm from './AuthForm';
import { showNoticeMessage } from '../../redux/notice/noticeActions';
import { getUserData } from '../../redux/dailyRate/dailyRateSelectors';

const AuthFormContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { age } = useSelector(getUserData);

    // useEffect(() => {
    //     const abortController = new AbortController();
    //     return () => {
    //         abortController.abort();
    //     };
    // }, []);

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const errorMessagesSchemaSignUp = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Минимальное количество символов 2 ')
            .max(20, 'Максимально допустимое количество символов 20')
            .required('Введите имя'),
        email: Yup.string()
            .required('Введите email')
            .matches(regex, 'Введен неверный email'),

        password: Yup.string()
            .min(8, 'Минимальное количество символов 8')
            .max(20, 'Максимально допустимое количество символов 20')
            .required('Введите пароль'),
    });

    const errorMessagesSchemaSignIn = Yup.object().shape({
        email: Yup.string()
            .required('Введите email')
            .matches(regex, 'Введен неверный email'),
        password: Yup.string()
            .min(8, 'Минимальное количество символов 8')
            .max(20, 'Максимально допустимое количество символов 20')
            .required('Введите пароль'),
    });

    const errorMessagesSchema =
        location.pathname === '/signup'
            ? errorMessagesSchemaSignUp
            : errorMessagesSchemaSignIn;

    const handleSubmit = values => {
        if (location.pathname === '/signup' && !age) {
            history.push('/');
            dispatch(
                showNoticeMessage({
                    message: 'Пожалуйста, введите данные',
                    response: 'warning',
                }),
            );
            return;
        }
        if (location.pathname === '/signup' && age) {
            signUp(values);
        } else signIn(values);
    };

    const signUp = async values => {
        try {
            await dispatch(signUpOperation(values));
            await dispatch(
                signInOperation({
                    email: values.email,
                    password: values.password,
                }),
            );
            await dispatch(dailyRateAuthOperation());
            await dispatch(getCurrentUser());
        } catch (error) {
            error.message === 'Request failed with status code 409' &&
                dispatch(
                    showNoticeMessage({
                        message: 'Пользователь с таким Email уже существует',
                        response: 'error',
                    }),
                );
            return;
        }
    };

    const signIn = async values => {
        try {
            await dispatch(signInOperation(values));
            await dispatch(getCurrentUser());
            await dispatch(dailyRateAuthOperation());
        } catch (error) {
            return;
        }
    };

    return (
        <AuthForm
            handleSubmit={handleSubmit}
            errorMessagesSchema={errorMessagesSchema}
        />
    );
};

export default AuthFormContainer;
