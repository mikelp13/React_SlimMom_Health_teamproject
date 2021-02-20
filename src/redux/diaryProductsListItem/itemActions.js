import { createAction } from '@reduxjs/toolkit';

const deleteEatenProductRequest = createAction(
    'user/deleteEatenProductRequest',
);
const deleteEatenProductSuccess = createAction(
    'user/deleteEatenProductSuccess',
);
const deleteEatenProductError = createAction('user/deleteEatenProductError');



const itemActions = {
    deleteEatenProductRequest,
    deleteEatenProductSuccess,
    deleteEatenProductError,

}

export default itemActions