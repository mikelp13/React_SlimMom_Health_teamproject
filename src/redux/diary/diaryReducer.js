import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import diaryActions from '../diary/diaryActions';

// const deleteProduct = (state, { payload }) => {

//    console.log("payload", payload)
//    console.log(':>> ', state.diaryProducts.dayInfo.eatenProducts);

//     // console.dir(state)
//     return {
//         ...state,
//         ...payload,

//         eatenProducts: payload.eatenProductsArr.filter(
//             item => item.id !== payload.delItemId,
//         ),
//     };
// };

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

        [diaryActions.deleteProductSuccess]: (state, { payload }) => {
            console.log('payload', payload);
            console.log(':>> ', state.diaryProducts.dayInfo.eatenProducts);

            // console.dir(state)
            return {
                ...state,
                // eatenProducts: state.eatenProducts.filter(
                //     item => item.id !== payload.delItemId,
                // ),
                eatenProducts:[]

            };
        },

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
