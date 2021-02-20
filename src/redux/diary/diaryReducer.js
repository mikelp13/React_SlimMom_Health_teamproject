import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import diaryActions from '../diary/diaryActions';

const productReducer = createReducer([], {
    [diaryActions.getProductSuccess]: (_, { payload }) => [...payload],
    [authActions.logoutSuccess]: () => [],
});

const myProductReducer = createReducer(
    {},
    {
        [diaryActions.addProductSuccess]: (_, { payload }) => {
            console.log('payload :>> ', payload);
            return { ...payload };
        },
        [authActions.logoutSuccess]: () => ({}),
    },
);

const dayInfoReducer = createReducer(
    {},
    {

        [diaryActions.addProductSuccess]: (state, { payload }) => {
            return { ...state, eatenProducts: [...state.eatenProducts, payload.eatenProduct] };
        },

        [diaryActions.getDayInfoSuccess]: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
        [authActions.getCurrentUserSuccess]: (state, { payload }) => ({
            ...state,
            days: [...payload.days],
        }),

        [diaryActions.deleteProductSuccess]: (state, { payload }) => {
            console.log('payload :>> ', payload);
            return {
                ...state,
                eatenProducts: [
                    ...state.eatenProducts.filter(
                        item => item.id !== payload.eatenProductId,
                    ),
                ],
            };
        },

        [authActions.logoutSuccess]: () => ({}),
    },
);

const currentDayReducer = createReducer('', {
    [diaryActions.setCurrentDay]: (_, { payload }) => payload,

    [authActions.logoutSuccess]: () => '',
});

export default combineReducers({
    products: productReducer,
    myProducts: myProductReducer,
    dayInfo: dayInfoReducer,
    currentDay: currentDayReducer,
});
