import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import dailyRateActions from './dailyRateAction';

const initialState = {
    userData: {
        age: '',
        bloodType: '',
        dailyRate: '',
        desiredWeight: '',
        height: '',
        notAllowedProducts: [],
    },

    summaries: [
        {
            _id: '',
            date: '',
            kcalLeft: 0,
            kcalConsumed: 0,
            dailyRate: 0,
            percentsOfDailyRate: 0,
            userId: '',
        },
    ],
    currentDayInfo: {
        _id: '',
        date: '',
        kcalLeft: 0,
        kcalConsumed: 0,
        dailyRate: 0,
        percentsOfDailyRate: 0,
        userId: '',
    },
};
const dailyRateReducer = createReducer(initialState, {
    [authActions.getCurrentUserSuccess]: (state, { payload }) => {
        // delete payload.userData.summaries

        return {
            ...state,
            userData: { ...payload.userData },
        };
    },

    [dailyRateActions.getDailyRateSuccess]: (state, { payload }) => ({
        ...state,
        userData: { ...state.userData, ...payload },
    }),
    [dailyRateActions.getDailyRateSuccessAuth]: (state, { payload }) => {
      
        const result = Object.keys(payload).filter(
            item => item !== 'summaries',
        );

        const newPayload = result.reduce((acc, item) => {
            acc[item] = payload[item];
            return acc;
        }, {});

        return {
            ...state,
            userData: { ...state.userData, ...newPayload },
            currentDayInfo: {
                ...payload.summaries[payload.summaries.length - 1],
            },
            summaries: payload.summaries,
        };
    },

    [authActions.logoutSuccess]: () => initialState,
});

export default dailyRateReducer;