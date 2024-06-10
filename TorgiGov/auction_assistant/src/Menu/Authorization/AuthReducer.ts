import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthInitialState {
    login: string,
    isLogged: boolean,
}

const initialState : AuthInitialState = {
    login: '',
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            logIn : (state, action : PayloadAction<string>) => {
                state.login = action.payload;
                state.isLogged = true;
            },
            logOut : (state) => {
                state.login = '';
                state.isLogged = false;
            }
        }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer