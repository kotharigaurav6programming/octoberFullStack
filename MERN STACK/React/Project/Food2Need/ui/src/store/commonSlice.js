import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navShow : "home"
};
const commonSlice = createSlice({
    name:"commonSlice",
    initialState,
    reducers:{
        setNavShow : (state,action)=>{
            state.navShow = action.payload
        }
    }
});

export const {setNavShow} = commonSlice.actions;
export default commonSlice.reducer;