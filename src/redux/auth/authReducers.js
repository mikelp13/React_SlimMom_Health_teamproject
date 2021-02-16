import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authActions from './authActions';

const initialUserState = {
    email: '',
    username: '',
    id: '',
    isAuth: false,

    userData: {
        age: '',
        bloodType: '',
        dailyRate: '',
        desiredWeight: '',
        height: '',
        notAllowedProducts: [],
    },
};

const userReducer = createReducer(initialUserState, {
    [authActions.signUpSuccess]: (state, { payload }) => ({
        ...state,
        email: payload.email,
        username: payload.username,
        id: payload.id,
    }),
    [authActions.signInSuccess]: (state, { payload }) => ({
        ...state,
        email: payload.user.email,
        id: payload.user.id,
        username: payload.user.username,
        isAuth: true,
        // userData: { ...payload.user.userData },
    }),

    [authActions.logoutSuccess]: () => initialUserState,
});

const initialToken = {
    accessToken: '',
    refreshToken: '',
    sid: '',
};

const tokenReducer = createReducer(initialToken, {
    [authActions.signInSuccess]: (state, { payload }) => ({
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
        sid: payload.sid,
    }),
    [authActions.logoutSuccess]: () => initialToken,
    [authActions.getNewTokenSuccess]: (state, { payload }) => ({
        ...state,
        accessToken: payload.newAccessToken,
        refreshToken: payload.newRefreshToken,
        sid: payload.sid,
    }),
});

const errorReducer = createReducer(null, {
    [authActions.signUpError]: (_, { payload }) => payload,
    [authActions.signInError]: (_, { payload }) => payload,
    [authActions.logoutError]: () => null,
    [authActions.getNewTokenError]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [authActions.signUpRequest]: () => true,
    [authActions.signUpSuccess]: () => false,
    [authActions.signUpError]: () => false,

    [authActions.signInRequest]: () => true,
    [authActions.signInSuccess]: () => false,
    [authActions.signInError]: () => false,

    [authActions.logoutRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false,
});

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['username', 'email', 'id', 'isAuth'],
};

const tokenPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['accessToken', 'refreshToken', 'sid'],
};

export default combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    token: persistReducer(tokenPersistConfig, tokenReducer),
    error: errorReducer,
    loading: loadingReducer,
});
