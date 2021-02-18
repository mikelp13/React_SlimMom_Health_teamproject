import { combineReducers, createReducer } from '@reduxjs/toolkit';
import diaryActions from '../diary/diaryActions';

const productReducer = createReducer([], {
  [diaryActions.getProductSuccess]: (_, { payload }) => [...payload],
})

const myProductReducer = createReducer({}, {
  [diaryActions.addProductSuccess]: (_, { payload }) => ({...payload}),
})
 
export default combineReducers({
  products: productReducer,
  myProducts: myProductReducer,
});