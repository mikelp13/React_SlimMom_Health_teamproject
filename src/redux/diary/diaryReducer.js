import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import diaryActions from '../diary/diaryActions';

const productReducer = createReducer([], {
    [diaryActions.getProductSuccess]: (_, { payload }) => [...payload],
});

const myProductReducer = createReducer(
    {},
    {
        [diaryActions.addProductSuccess]: (_, { payload }) => ({ ...payload }),
    },
);

const dayInfoReducer = createReducer(
    {},
    {
        [diaryActions.getDayInfoSuccess]: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
        [authActions.getCurrentUserSuccess]: (state, { payload }) => ({
            ...state,
            days: [...payload.days],
        }),
    },
);

export default combineReducers({
    products: productReducer,
    myProducts: myProductReducer,
    dayInfo: dayInfoReducer,
});
