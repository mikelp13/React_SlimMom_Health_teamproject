import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import {
    getCurrentUser,
    signInOperation,
    signUpOperation,
} from '../../redux/auth/authOperations';
import { dailyRateAuthOperation } from '../../redux/dailyRate/dailyRateOperations';
import AuthForm from './AuthForm';
import { showNoticeMessage } from '../../redux/notice/noticeActions';

const AuthFormContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();

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
        if (location.pathname === '/signup') {
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
            dispatch(
                showNoticeMessage(
                    'Пользователь с таким логином уже существует',
                ),
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
