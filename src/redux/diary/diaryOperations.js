import axios from 'axios';
import moment from 'moment';
import diaryActions from '../diary/diaryActions';

const addProductOperation = (date, productId, weight) => async (dispatch, getState) => {
   
    dispatch(diaryActions.addProductRequest());
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_PRODUCT_DAY}`,
            { date, productId, weight },
        );
         dispatch(diaryActions.addProductSuccess(response.data));
    } catch (error) {
        dispatch(diaryActions.addProductError(error.message));
    }
};

const getProductOperation = query => async dispatch => {
    dispatch(diaryActions.getProductRequest());
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_GET_PRODUCT}?search=${query}`
        );

        dispatch(diaryActions.getProductSuccess(response.data));
    } catch (error) {
        dispatch(diaryActions.getProductError(error.message));
    }
};


const getDayInfoOperation = (
  date = { date: moment(Date.now()).format('YYYY-MM-DD') },
) => async dispatch => {
  dispatch(diaryActions.getDayInfoRequest());
  try {
      const response = await axios.post(process.env.REACT_APP_GET_DAY_INFO, date);
     console.log('response', response)
      // response.data.eatenProducts
      //     ? dispatch(diaryActions.getDayInfoSuccess(response.data))
      //     : dispatch(
      //       diaryActions.getDayInfoSuccess({
      //               date: date.date,
      //               eatenProducts: [],
      //               daySummary: {},
      //           }),
      //       );
  } catch (error) {
      dispatch(diaryActions.getDayInfoError(error));
  }
};

export { addProductOperation, getProductOperation, getDayInfoOperation };
