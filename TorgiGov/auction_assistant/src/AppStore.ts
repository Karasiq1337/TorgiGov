import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./Menu/Authorization/AuthReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const authPersistConfig = {
    key: "auth",
    storage,
};


export const store = configureStore({
    reducer: {
        authReducer: persistReducer(authPersistConfig, AuthReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export type AppStore = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);