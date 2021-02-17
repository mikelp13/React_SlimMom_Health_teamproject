import axios from 'axios';
import authActions from './authActions';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const signUpOperation = user => async dispatch => {
    dispatch(authActions.signUpRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
        });

        dispatch(authActions.signUpSuccess({ ...response.data }));
    } catch (error) {
        dispatch(authActions.signUpError(error.message));
    }
};

const signInOperation = user => async dispatch => {
    dispatch(authActions.signInRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
            ...user,
        });

        token.set(response.data.accessToken);

        dispatch(authActions.signInSuccess({ ...response.data }));
    } catch (error) {
        dispatch(authActions.signInError(error.message));
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
    }
};

const refreshTokenOperation = () => async (dispatch, getState) => {
    const sid = getState().auth.token.sid;
    const accessToken = getState().auth.token.accessToken;
    console.log(sid);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    dispatch(authActions.getNewTokenRequest());
    try {
        const response = await axios.post(process.env.REACT_APP_REFRESH_TOKEN, {
            sid,
        });

        token.set(response.data.newAccessToken);
        dispatch(authActions.getNewTokenSuccess(response.data));
    } catch (error) {
        dispatch(authActions.getNewTokenError(error.message));
        // dispatch(logoutOperations());
        dispatch(authActions.logoutSuccess());
    }
};

export {
    signUpOperation,
    signInOperation,
    refreshTokenOperation,
    logoutOperations,
};
