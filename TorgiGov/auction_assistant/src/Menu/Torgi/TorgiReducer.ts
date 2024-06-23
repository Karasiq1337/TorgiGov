import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {LotProps} from "./Torgi.types";

export interface TorgiState {
    lots: Array<LotProps>,
}

const initialState : TorgiState = {
    lots: new Array<LotProps>,
}

export const torgiSlice = createSlice({
    name: 'torgi',
    initialState,
    reducers: {
        addLot : (state , action : PayloadAction<LotProps>) =>{
            state.lots.push(action.payload);
        },
        delLot : (state , action : PayloadAction<LotProps> ) =>{
            state.lots = state.lots.filter(lot => lot.Id != action.payload.Id);
        }
    }
})

export const { addLot,
                delLot} = torgiSlice.actions
export default torgiSlice.reducer