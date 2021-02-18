import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AuthFormStyled from './AuthFormStyled';

const AuthForm = ({ handleSubmit, errorMessagesSchema }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const initialState =
        location.pathname === '/signup'
            ? { username: '', email: '', password: '' }
            : { email: '', password: '' };
    return (
        <AuthFormStyled>
            <h2 className="authFormTitle">
                {location.pathname === '/signup' ? 'регистрация' : 'вход'}
            </h2>
            <Formik
                initialValues={{ ...initialState }}
                validationSchema={errorMessagesSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm({});
                }}
            >
                {({ errors, touched }) => (
                    <Form className="authForm">
                        {location.pathname === '/signup' && (
                            <label className="authFormFild">
                                <Field
                                    className={`authFormInput ${
                                        touched.username &&
                                        errors.username &&
                                        'authInputError'
                                    }`}
                                    type="text"
                                    name="username"
                                    placeholder=" "
                                />
                                <span className="authFormText">
                                    Имя <sup className="authFormStar">*</sup>
                                </span>

                                <span className="authError">
                                    <ErrorMessage name="username" />
                                </span>
                            </label>
                        )}
                        <label className="authFormFild">
                            <Field
                                className={`authFormInput ${
                                    touched.email &&
                                    errors.email &&
                                    'authInputError'
                                }`}
                                type="text"
                                name="email"
                                placeholder=" "
                            />
                            <span className="authFormText">
                                E-mail <sup className="authFormStar">*</sup>
                            </span>

                            <span className="authError">
                                <ErrorMessage name="email" />
                            </span>
                        </label>
                        <label className="authFormFild">
                            <Field
                                className={`authFormInput ${
                                    touched.password &&
                                    errors.password &&
                                    'authInputError'
                                }`}
                                type="password"
                                name="password"
                                placeholder=" "
                            />
                            <span className="authFormText">
                                Пароль <sup className="authFormStar">*</sup>
                            </span>

                            <span className="authError">
                                <ErrorMessage name="password" />
                            </span>
                        </label>
                        <button
                            className="mainButton authFormBtn"
                            type="submit"
                        >
                            {location.pathname === '/signup'
                                ? 'Регистрация'
                                : 'Вход'}
                        </button>
                    </Form>
                )}
            </Formik>
            {/* // !========== Это нужно будет убрать ============== */}

            {/*<button onClick={onHandleLogout} type="button">
                Logout
                </button>*/}



            {/* // !============================================ */}
        </AuthFormStyled>
    );
};

export default AuthForm;
