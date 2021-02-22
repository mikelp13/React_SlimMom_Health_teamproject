import axios from 'axios';
import moment from 'moment';
import diaryActions from '../diary/diaryActions';

const addProductOperation = (date, productId, weight) => async (
    dispatch,
) => {
    dispatch(diaryActions.addProductRequest());
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_PRODUCT_DAY}`,
            { date, productId, weight },
        );
        console.log('response.data :>> ', response.data);
        dispatch(diaryActions.addProductSuccess(response.data));
    } catch (error) {
        dispatch(diaryActions.addProductError(error.message));
    }
};

const getProductOperation = query => async dispatch => {
    dispatch(diaryActions.getProductRequest());
    if (query.length >= 2) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_GET_PRODUCT}?search=${query}`,
            );

            dispatch(diaryActions.getProductSuccess(response.data));
        } catch (error) {
            dispatch(diaryActions.getProductError(error.message));
        }
    }
};

const getDayInfoOperation = (
    date = { date: moment(Date.now()).format('YYYY-MM-DD') },
) => async dispatch => {
    dispatch(diaryActions.getDayInfoRequest());
    try {
        const response = await axios.post(
            process.env.REACT_APP_GET_DAY_INFO,
            date,
        );
        console.log('response :>> ', response.data);
        response.data.eatenProducts
            ? dispatch(diaryActions.getDayInfoSuccess(response.data))
            : dispatch(
                  diaryActions.getDayInfoSuccess({
                      date: date.date,
                      eatenProducts: [],
                      daySummary: {},
                      kcalLeft: response.data.kcalLeft
                  }),
              );
    } catch (error) {
        dispatch(diaryActions.getDayInfoError(error));
    }
};

const deleteProductOperation = product => async (dispatch, getState) => {
 
    dispatch(diaryActions.deleteProductRequest());
    const { eatenProductId } = product;
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_PRODUCT_DAY}`,
            { data: product },
        );
        console.log('data', response.data);
        dispatch(
            diaryActions.deleteProductSuccess({
               ...response.data,
                eatenProductId,
            }),
        );
    } catch (error) {
        dispatch(diaryActions.deleteProductError(error.message));
    }
};

// export const deleteEatenProduct = (product) => dispatch => {
//   dispatch(itemActions.deleteEatenProductRequest());
//   api
//       .deleteEatenProduct(product)
//       .then(({ data }) => {

//           getDayInfoOperation();

//           return dispatch(
//               itemActions.deleteEatenProductSuccess(data.newDaySummary),
//           );
//       })
//       .catch(err => dispatch(itemActions.deleteEatenProductError(err)));
// };
export {
    addProductOperation,
    getProductOperation,
    getDayInfoOperation,
    deleteProductOperation,
};
