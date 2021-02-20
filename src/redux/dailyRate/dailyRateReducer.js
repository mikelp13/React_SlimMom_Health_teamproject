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

    summaries: 
        {
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

    [dailyRateActions.getDailyRateSuccessAuth]: (state, { payload }) => {
    
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

    [diaryActions.addProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        summaries: 
          {
              _id: payload.daySummary.id,
              date: payload.daySummary.date,
              kcalLeft:payload.daySummary.kcalLeft,
              kcalConsumed:payload.daySummary.kcalConsumed,
              dailyRate: payload.daySummary.dailyRate,
              percentsOfDailyRate: payload.daySummary.percentsOfDailyRate,
              userId: payload.daySummary.userId,
          },
      };
  },



    
    [diaryActions.deleteProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        summaries:
          {
              _id: payload.newDaySummary.id,
              date: payload.newDaySummary.date,
              kcalLeft:payload.newDaySummary.kcalLeft,
              kcalConsumed:payload.newDaySummary.kcalConsumed,
              dailyRate: payload.newDaySummary.dailyRate,
              percentsOfDailyRate: payload.newDaySummary.percentsOfDailyRate,
              userId: payload.newDaySummary.userId,
          },
      };
  },



    [authActions.logoutSuccess]: () => initialState,
});

export default dailyRateReducer;



