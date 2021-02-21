import { createReducer } from '@reduxjs/toolkit';
import { showNoticeMessage, hideNoticeMessage } from './noticeActions';

const initialState = {
    showNotice: false,
    message: '',
    response: '',
};

export const noticeReducer = createReducer(
    { ...initialState },
    {
        [showNoticeMessage]: (state, action) => ({
            ...state,
            showNotice: !state.showNotice,
            message: action.payload.message,
            response: action.payload.response,
        }),
        [hideNoticeMessage]: (state, action) => ({
            ...state,
            showNotice: !state.showNotice,
        }),
    },
);
