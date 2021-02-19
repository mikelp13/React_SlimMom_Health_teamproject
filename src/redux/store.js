import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from './auth/authReducers';
import diaryReducers from './diary/diaryReducer';
import { noticeReducer } from './notice/noticeReducer';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        notice: noticeReducer,
        diaryProducts: diaryReducers,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
