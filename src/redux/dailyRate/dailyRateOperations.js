import axios from 'axios';
import dailyRateActions  from './dailyRateAction';


const dailyRateOperation = characteristics => async dispatch => {
  dispatch(dailyRateActions.getDailyRateRequest());
  try {
      const response = await axios.post(process.env.REACT_APP_DAILY_RATE, characteristics);

      dispatch(dailyRateActions.getDailyRateSuccess({...characteristics, ...response.data }));
  } catch (error) {
      dispatch(dailyRateActions.getDailyRateError(error.message));
  }
};
export default dailyRateOperation;