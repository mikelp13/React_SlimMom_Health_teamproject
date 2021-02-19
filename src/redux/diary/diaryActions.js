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

const setCurrentDay = createAction('diary/setCurrentDay');

const deleteProductRequest = createAction('diary/deleteProductRequest');
const deleteProductSuccess = createAction('diary/deleteProductSuccess');
const deleteProductError = createAction('diary/deleteProductError');

const diaryActions = {
    addProductRequest,
    addProductSuccess,
    addProductError,
    getProductRequest,
    getProductSuccess,
    getProductError,
    getDayInfoRequest,
    getDayInfoSuccess,
    getDayInfoError,
    setCurrentDay,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductError
};

export default diaryActions;
