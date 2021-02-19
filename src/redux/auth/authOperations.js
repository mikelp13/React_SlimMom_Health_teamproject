import axios from 'axios';
import dailyRateActions from '../dailyRate/dailyRateAction';
import { dailyRateAuthOperation } from '../dailyRate/dailyRateOperations';
import dailyRateReducer from '../dailyRate/dailyRateReducer';
import { showNoticeMessage } from '../notice/noticeActions';
import authActions from './authActions';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const signUpOperation = user => async (dispatch, getState) => {
    dispatch(authActions.signUpRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
        });

        await dispatch(authActions.signUpSuccess({ ...response.data }));

        await dispatch(
            signInOperation({ email: user.email, password: user.password }),
        );
        const userId = getState().auth.user.id;
        const userDataInStore = getState().auth.user.userData;
        const userData = {
            weight: userDataInStore.weight,
            height: userDataInStore.height,
            age: userDataInStore.age,
            desiredWeight: userDataInStore.desiredWeight,
            bloodType: userDataInStore.bloodType,
        };
        await dispatch(dailyRateAuthOperation(userData, userId));
    } catch (error) {
        dispatch(authActions.signUpError(error.message));
    }
};

const signInOperation = user => async (dispatch, getState) => {
    dispatch(authActions.signInRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
            ...user,
        });

        token.set(response.data.accessToken);

        dispatch(authActions.signInSuccess({ ...response.data }));
        await dispatch(getCurrentUser());
        const username = getState().auth.user.username;

        dispatch(showNoticeMessage(`Привет, ${username}!`));
    } catch (error) {
        dispatch(authActions.signInError(error.message));
        dispatch(showNoticeMessage('Логин или пароль введен неверно'));
    }
};

const logoutOperations = () => async (dispatch, getState) => {
    const accessToken = getState().auth.token.accessToken;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    dispatch(authActions.logoutRequest());
    try {
        await axios.post(process.env.REACT_APP_LOGOUT);

        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
        dispatch(authActions.logoutSuccess());
    }
};

const refreshTokenOperation = () => async (dispatch, getState) => {
    const sid = getState().auth.token.sid;
    const accessToken = getState().auth.token.accessToken;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    dispatch(authActions.getNewTokenRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_REFRESH_TOKEN, {
            sid,
        });

        token.set(response.data.newAccessToken);
        dispatch(authActions.getNewTokenSuccess(response.data));
        await dispatch(getCurrentUser());
    } catch (error) {
        dispatch(authActions.getNewTokenError(error.message));
        // dispatch(logoutOperations());
        dispatch(authActions.logoutSuccess());
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
    const accessToken = getState().auth.token.accessToken;

    if (!accessToken) {
        dispatch(logoutOperations);
        return;
    }

    token.set(accessToken);

    dispatch(authActions.getCurrentUserRequest());
    try {
        const response = await axios.get(
            process.env.REACT_APP_GET_CURRENT_USER,
        );
        
        dispatch(authActions.getCurrentUserSuccess(response.data));
        const characteristics = {...response.data.userData}
        delete characteristics.notAllowedProducts
        delete characteristics.dailyRate

        await dispatch(dailyRateAuthOperation(characteristics, response.data.id));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
};

export {
    signUpOperation,
    signInOperation,
    refreshTokenOperation,
    logoutOperations,
    getCurrentUser,
};
