import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AuthReducer from "./Menu/Authorization/AuthReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import TorgiReducer from "./Menu/Torgi/TorgiReducer";
import CompareLotsReducer from "./Menu/CompareLots/CompareLotsReducer";
import BestOptionReducer, {BestOptionSlice} from "./Menu/BestOption/BestOptionReducer";

const rootPersistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: AuthReducer,
    torgi: TorgiReducer,
    compare: CompareLotsReducer,
    props: BestOptionReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        reducer : persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

export type AppStore = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
