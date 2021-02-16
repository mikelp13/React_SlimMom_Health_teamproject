import axios from 'axios';
import itemActions from './itemActions';
const url = 'https://slimmom-backend.goit.global/'

axios.defaults.baseURL = url;


export const deleteEatenProductItem = (product) => {
    return axios.delete(`/day`, { data: product });
}

export const deleteEatenProduct = (product, date) => dispatch => {
    dispatch(itemActions.deleteEatenProductRequest());
    axios
        .deleteEatenProductItem(product)
        .then(({ data }) => {
            // getProductList(date, dispatch);
            // ========================================= test func will be deleted later =============================
            axios
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
            // ====================================================================================================================
            return dispatch(
                itemActions.deleteEatenProductSuccess(data.newDaySummary),
            );
        })
        .catch(err => dispatch(itemActions.deleteEatenProductError(err)));
};
