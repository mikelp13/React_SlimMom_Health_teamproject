import axios from 'axios';
import moment from 'moment';
import userDataAction from './userDataAction';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const getDayInfoOperation = (
    date = { date: moment(Date.now()).format('YYYY-MM-DD') },
) => async dispatch => {
    dispatch(userDataAction.getDayInfoRequest());
    try {
        const response = await axios.post('/day/info', date);
        response.data.eatenProducts
            ? dispatch(userDataAction.getDayInfoSuccess(response.data))
            : dispatch(
                  userDataAction.getDayInfoSuccess({
                      date: date.date,
                      eatenProducts: [],
                      daySummary: {},
                  }),
              );
    } catch (error) {
        dispatch(userDataAction.getDayInfoError(error));
    }
};
const setDataOperation = date => async dispatch => {
    dispatch(userDataAction.getDataSuccuss(date));
};

export default {
    getDayInfoOperation,
    setDataOperation,
};
