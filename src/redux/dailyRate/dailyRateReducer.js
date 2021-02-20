import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import dailyRateActions from './dailyRateAction';
import moment from 'moment';
import diaryActions from '../diary/diaryActions';

const initialState = {
    userData: {
        age: '',
        bloodType: '',
        dailyRate: '',
        desiredWeight: '',
        height: '',
        notAllowedProducts: [],
        data: moment(new Date()).format('YYYY-MM-DD'),
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
};
const dailyRateReducer = createReducer(initialState, {
    [authActions.getCurrentUserSuccess]: (state, { payload }) => {
        // delete payload.userData.summaries

        return {
            ...state,
            userData: { ...payload.userData },
            summaries:{ ...payload.days[payload.days.length-1].daySummary },
        };
    },

    [diaryActions.getDayInfoSuccess]: (state, { payload }) => ({
      ...state,
      summaries:{ ...payload.daySummary},
  }),

    [dailyRateActions.getDailyRateSuccess]: (state, { payload }) => ({
        ...state,
        userData: { ...state.userData, ...payload },
    }),
    // [dailyRateActions.getDailyRateSuccessAuth]: (state, { payload }) => {
      
    //     const result = Object.keys(payload).filter(
    //         item => item !== 'summaries',
    //     );

    //     const newPayload = result.reduce((acc, item) => {
    //         acc[item] = payload[item];
    //         return acc;
    //     }, {});

    //     return {
    //         ...state,
    //         userData: { ...state.userData, ...newPayload },
    //         currentDayInfo: {
    //             ...payload.summaries[payload.summaries.length - 1],
    //         },
    //         summaries: payload.summaries,
    //     };
    // },

    [dailyRateActions.getDailyRateSuccessAuth]: (state, { payload }) => {
      // const result = Object.keys(payload).filter(
      //     item => item !== 'summaries',
      // );
      // const newPayload = result.reduce((acc, item) => {
      //     acc[item] = payload[item];
      //     return acc;
      // }, {});
    
      // const newSummaries = payload.summaries.length
      //     ? payload.summaries.find(item => item.date === state.userData.data)
      //     : {};
      // return {
      //     ...state,
      //     userData: { ...state.userData, ...newPayload },
      //     currentDayInfo: {
      //         ...state.userData,
      //         ...newSummaries,
      //         dailyRate: payload.dailyRate,
      //     },
      //     summaries: payload.summaries,
      // };


      return {
        ...state,
        userData: {
          age: payload.age,
          bloodType: payload.bloodType,
          dailyRate: payload.dailyRate,
          desiredWeight: payload.desiredWeight,
          height: payload.height,
          notAllowedProducts:payload.notAllowedProducts,
        },
    };
    },


    [authActions.logoutSuccess]: () => initialState,
});

export default dailyRateReducer;


// data: moment(new Date()).format('YYYY-MM-DD'),
