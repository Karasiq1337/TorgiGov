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
        },
        setLots: (state, action : PayloadAction<LotProps[]>) => {
            state.lots = action.payload;
        }
    }
})

export const {  addLot,
                delLot,
                setLots} = torgiSlice.actions
export default torgiSlice.reducer