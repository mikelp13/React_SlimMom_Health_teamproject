import axios from 'axios';
import moment from 'moment';
import diaryActions from '../diary/diaryActions';

const addProductOperation = (date, productId, weight) => async dispatch => {
    dispatch(diaryActions.addProductRequest());
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_PRODUCT_DAY}`,
            { date, productId, weight },
        );

        const summary = response.data.daySummary
            ? response.data.daySummary
            : response.data.newSummary;

        const id = response.data?.day?.id
            ? response.data.day.id
            : response.data.newDay.id;

        dispatch(diaryActions.addProductSuccess({ ...response.data, id, summary}));
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
        response.data.eatenProducts
            ? dispatch(diaryActions.getDayInfoSuccess(response.data))
            : dispatch(
                  diaryActions.getDayInfoSuccess({
                      date: date.date,
                      eatenProducts: [],
                      daySummary: {},
                      kcalLeft: response.data.kcalLeft,
                      dayId: response.data.id,
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

export {
    addProductOperation,
    getProductOperation,
    getDayInfoOperation,
    deleteProductOperation,
};
