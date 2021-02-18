import axios from 'axios';
import itemActions from './itemActions';
import api from '../../components/DiaryProductsListItem/apitest'

const url = 'https://slimmom-backend.goit.global/';

axios.defaults.baseURL = url;
// =====================================================================================for test 
export const getProducts = date => (dispatch, getState) => {
    // const {
    //     auth: { accessToken },
    // } = getState();

    // if (!accessToken) return;

    // api.setToken(accessToken);
    // dispatch(itemActions.getProductsRequest());

    api
        .getProducts({ date })
        .then(({ data }) => {
            let payload = {};
            if (data.daySummary) {
                const { daySummary, eatenProducts, id } = data;
                payload = { daySummary, eatenProducts, currentDayId: id };
            } else {
                payload = {
                    daySummary: { ...data },
                    eatenProducts: [],
                    currentDayId: null,
                };
            }
            dispatch(itemActions.getProductsSuccess(payload));
        })
        .catch(err => dispatch(itemActions.getProductsError(err)));
}
// ===============================================================================================================


// export const deleteEatenProductItem = (product) => {
//     return axios.delete(`/day`, { data: product });
// }


export const deleteEatenProduct = (product, date) => dispatch => {
    dispatch(itemActions.deleteEatenProductRequest());
    api
        .deleteEatenProduct(product)
        .then(({ data }) => {
            // ========================================= test func will be deleted later =============================
            getProducts(date, dispatch);
            // ====================================================================================================================
            return dispatch(
                itemActions.deleteEatenProductSuccess(data.newDaySummary),
            );
        })
        .catch(err => dispatch(itemActions.deleteEatenProductError(err)));
};
