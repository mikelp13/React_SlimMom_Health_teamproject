// import { createReducer } from '@reduxjs/toolkit';
// import itemActions from './itemActions';

// const initialState = {
//     daySummary: {},
//     currentDayId: null,
//     currentDay: null,
//     eatenProducts: [
//         {
//             title: 'Ликёр Baileys',
//             weight: 100,
//             kcal: 327,
//             id: '03ee31b6-36df-4327-9041-51d96dd3bf0f'
//         },
//         {
//             title: 'Пиво Budweiser Budvar Original',
//             weight: 100,
//             kcal: 44,
//             id: '833681b7-98d0-4b4a-9418-707de4d995d9'
//         }
//     ]
// };

// const user = createReducer(initialState, {
//     [itemActions.deleteEatenProductSuccess]: (state, { payload }) => ({
//         ...state,
//         daySummary: { ...payload },
//     }),


//     // ===================================================================== for test delete after =============================
//     // [itemActions.getProductsSuccess]: (state, { payload }) => ({
//     //     ...state,
//     //     ...payload,
//     // }),
//     // [itemActions.setCurrentDay]: (state, { payload }) => ({
//     //     ...state,
//     //     currentDay: payload,
//     // }),
// })

// export default user