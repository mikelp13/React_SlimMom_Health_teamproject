import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import diaryActions from '../diary/diaryActions';

const productReducer = createReducer([], {
    [diaryActions.getProductSuccess]: (_, { payload }) => [...payload],
    [authActions.logoutSuccess]: () => [],
});

// const myProductReducer = createReducer(
//     {},
//     {
//         [diaryActions.addProductSuccess]: (_, { payload }) => ({ ...payload }),
//         [authActions.logoutSuccess]: () => ({}),
//     },
// );
const myProductReducer = createReducer(
  {},
  {
      [diaryActions.addProductSuccess]: (_, { payload }) => ({ ...payload }),
      [authActions.logoutSuccess]: () => ({}),
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

        [diaryActions.deleteProductSuccess]: (state, { payload }) => ({
                  ...state,
                   daySummary: { ...payload },
               }),

        [authActions.logoutSuccess]: () => ({}),
    },
);

const currentDayReducer = createReducer('', {
    [diaryActions.setCurrentDay]: (_, { payload }) => payload,

    [authActions.logoutSuccess]: () => '',
});

// const user = createReducer(initialState, {
//     [itemActions.deleteEatenProductSuccess]: (state, { payload }) => ({
//         ...state,
//         daySummary: { ...payload },
//     }),



export default combineReducers({
    products: productReducer,
    myProducts: myProductReducer,
    dayInfo: dayInfoReducer,
    currentDay: currentDayReducer,
});
