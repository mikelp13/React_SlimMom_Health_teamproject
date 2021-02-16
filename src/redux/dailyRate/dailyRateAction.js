import { createAction } from '@reduxjs/toolkit';

const getDailyRateRequest = createAction('dailyRate/getDailyRateRequest');
const getDailyRateSuccess = createAction('dailyRate/getDailyRateSuccess');
const getDailyRateError = createAction('dailyRate/getDailyRateError');

 const dailyRateActions = {
  getDailyRateRequest,
    getDailyRateSuccess,
    getDailyRateError,
};

export default dailyRateActions
