import axios from 'axios';
import dailyRateActions from './dailyRateAction';

const dailyRateOperation = characteristics => async dispatch => {
    dispatch(dailyRateActions.getDailyRateRequest());
    try {
        const response = await axios.post(
            process.env.REACT_APP_DAILY_RATE,
            characteristics,
        );

        dispatch(
            dailyRateActions.getDailyRateSuccess({
                ...characteristics,
                ...response.data,
            }),
        );
    } catch (error) {
        dispatch(dailyRateActions.getDailyRateError(error.message));
    }
};

const dailyRateAuthOperation = () => async (dispatch, getState) => {
    const userId = getState().auth.user.id;
    const userDataInStore = getState().user.userData;

    const characteristics = {
        weight: userDataInStore.weight,
        height: userDataInStore.height,
        age: userDataInStore.age,
        desiredWeight: userDataInStore.desiredWeight,
        bloodType: userDataInStore.bloodType,
    };
    dispatch(dailyRateActions.getDailyRateRequestAuth());
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_DAILY_RATE}/${userId}`,
            characteristics,
        );

        dispatch(
            dailyRateActions.getDailyRateSuccessAuth({
                ...characteristics,
                ...response.data,
            }),
        );
    } catch (error) {
        dispatch(dailyRateActions.getDailyRateErrorAuth(error.message));
    }
};

export { dailyRateOperation, dailyRateAuthOperation };
