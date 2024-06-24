import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {LotProps} from "../Torgi/Torgi.types";

export interface AuthInitialState {
    BestOption: LotProps | null,
}

const initialState : AuthInitialState = {
    BestOption: null
   
}

export const BestOptionSlice = createSlice({
    name: 'props',
    initialState,
    reducers: {
        bestoption: (state, action: PayloadAction<LotProps>) => {
            state.BestOption = action.payload;
        },
    }
})

export const { bestoption} = BestOptionSlice.actions
export default BestOptionSlice.reducer