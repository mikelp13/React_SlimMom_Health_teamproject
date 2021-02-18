import { createAction } from '@reduxjs/toolkit';

const addProductRequest = createAction('diary/addProductRequest');
const addProductSuccess = createAction('diary/addProductSuccess');
const addProductError = createAction('diary/addProductError');

const getProductRequest = createAction('diary/getProductRequest');
const getProductSuccess = createAction('diary/getProductSuccess');
const getProductError = createAction('diary/getProductError');

const getDayInfoRequest = createAction('diary/getDayInfoRequest');
const getDayInfoSuccess = createAction('diary/getDayInfoSuccess');
const getDayInfoError = createAction('diary/getDayInfoError');

const diaryActions = {
  addProductRequest,
  addProductSuccess,
  addProductError,
  getProductRequest,
  getProductSuccess,
  getProductError,
  getDayInfoRequest,
  getDayInfoSuccess,
  getDayInfoError
};

export default diaryActions

