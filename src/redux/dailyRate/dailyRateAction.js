import { createAction } from '@reduxjs/toolkit';

const getDailyRateRequest = createAction('dailyRate/getDailyRateRequest');
const getDailyRateSuccess = createAction('dailyRate/getDailyRateSuccess');
const getDailyRateError = createAction('dailyRate/getDailyRateError');

const getDailyRateRequestAuth = createAction('dailyRate/getDailyRateRequestAuth');
const getDailyRateSuccessAuth = createAction('dailyRate/getDailyRateSuccessAuth');
const getDailyRateErrorAuth = createAction('dailyRate/getDailyRateErrorAuth');

 const dailyRateActions = {
    getDailyRateRequest,
    getDailyRateSuccess,
    getDailyRateError,
    getDailyRateRequestAuth,
    getDailyRateSuccessAuth,
    getDailyRateErrorAuth,
};

export default dailyRateActions
