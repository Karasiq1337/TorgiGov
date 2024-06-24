import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {persistor} from "../../AppStore";
import {PURGE} from "redux-persist/es/constants";

export interface AuthInitialState {
    login: string,
    isLogged: boolean,
    regClicked: boolean,
    showAuthModal: boolean,
    authModalText: string,
}

const initialState : AuthInitialState = {
    login: '',
    isLogged: false,
    regClicked: false,
    showAuthModal: false,
    authModalText: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            logIn : (state, action : PayloadAction<string>) => {
                state.login = action.payload;
                state.isLogged = true;
                state.authModalText = `Добро пожаловать, ${action.payload}`;
                state.showAuthModal = true;
            },
            logInFail : (state) =>{
                state.authModalText = 'Неверный логин или пароль';  
                state.showAuthModal = true;    
            },
            logOut : (state) => {
                state.login = '';
                state.isLogged = false;
            },
            showReg : (state) => {
                state.regClicked = true;
            },
            hideReg : (state) => {
                state.regClicked = false;
            },
            regSuccess : (state ) => {
                state.regClicked = false;
                state.showAuthModal = true;
                state.authModalText = "Регистрация прошла успешно";
            },
            regSuccessHide : (state) => {
                state.showAuthModal = false;
            }
        },
})

export const { logIn,
    logOut, 
    showReg,
    hideReg, 
    regSuccess, 
    regSuccessHide,
    logInFail} = authSlice.actions
export default authSlice.reducer