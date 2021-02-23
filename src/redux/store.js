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
import dailyRateReducer from './dailyRate/dailyRateReducer';
import {productReducer, dayInfoReducer, currentDayReducer} from './diary/diaryReducer';
import { noticeReducer } from './notice/noticeReducer';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: dailyRateReducer,
        products: productReducer,
        dayInfo: dayInfoReducer,
        currentDay: currentDayReducer,
        notice: noticeReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
