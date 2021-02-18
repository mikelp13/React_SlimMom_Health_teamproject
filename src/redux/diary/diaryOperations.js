import axios from 'axios';
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
            `${process.env.REACT_APP_GET_PRODUCT}?search=${query}`,
        );

        dispatch(diaryActions.getProductSuccess(response.data));
    } catch (error) {
        dispatch(diaryActions.getProductError(error.message));
    }
};

export { addProductOperation, getProductOperation };
