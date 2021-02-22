import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import diaryActions from '../diary/diaryActions';
import moment from 'moment';

const productReducer = createReducer([], {
    [diaryActions.getProductSuccess]: (_, { payload }) => [...payload],
    [authActions.logoutSuccess]: () => [],
});

const initialState = {
    dayId: '',
    eatenProducts: [],
};

const dayInfoReducer = createReducer(initialState, {
    [diaryActions.addProductSuccess]: (state, { payload }) => {
        return {
            ...state,
            dayId: payload.id,
            eatenProducts: [...state.eatenProducts, payload.eatenProduct],
        };
    },

    [diaryActions.getDayInfoSuccess]: (state, { payload }) => ({
        ...state,
        dayId: payload.id ? payload.id : '',
        eatenProducts: [...payload.eatenProducts],
    }),
 
    [diaryActions.deleteProductSuccess]: (state, { payload }) => {
        return {
          ...state,
            eatenProducts: [
                ...state.eatenProducts.filter(
                    item => item.id !== payload.eatenProductId,
                ),
            ],
        };
    },

    [authActions.logoutSuccess]: () => initialState,
});

const currentDayReducer = createReducer(
    { date: moment(new Date()).format('YYYY-MM-DD')},
    {
        [diaryActions.setCurrentDay]: (_, { payload }) => ({date: payload}),

        [authActions.logoutSuccess]: () => '',
    },
);

export { productReducer, dayInfoReducer, currentDayReducer };
