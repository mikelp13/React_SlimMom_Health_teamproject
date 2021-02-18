import { createAction } from '@reduxjs/toolkit';

const getDayInfoRequest = createAction('userData/getDayInfoRequest');
const getDayInfoSuccess = createAction('userData/getDayInfoSuccess');
const getDayInfoError = createAction('userData/getDayInfoError');

export default {
    getDayInfoRequest,
    getDayInfoSuccess,
    getDayInfoError,
};
