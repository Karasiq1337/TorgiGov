import {createSlice} from "@reduxjs/toolkit"

export interface CompareLotsState {
    showCompareModal: boolean,
}

const initialState : CompareLotsState = {
    showCompareModal: false,
}

export const compareLotsSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        setShow : (state) =>{
            state.showCompareModal = true;
        },
        setNoShow : (state) =>{
            state.showCompareModal = false;
        },
    }
})

export const { setShow,
    setNoShow} = compareLotsSlice.actions
export default compareLotsSlice.reducer