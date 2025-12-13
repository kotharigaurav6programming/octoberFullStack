import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedDonorURL } from "../utils.js";

const initialState = {
    loggedInEmail : '',
    donorObj : {},
    donorArray : [],
    status : '',
    message : ''
};
const donorRegistrationThunk = createAsyncThunk('donorSlice/donorRegistrationThunk',async(donorObj)=>{
    try{
        const result = await axios.post(requestedDonorURL+'/addDonor',donorObj);
        console.log("result received : ",result);
        return result;
    }catch(error){
        console.log("Error in donorRegistrationThunk : ",error);
    }
});
const donorSlice = createSlice({
    name:"donorSlice",
    initialState,
    reducers:{
        resetMessage : (state,action)=>{
            state.message = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(donorRegistrationThunk.pending,(state)=>{})
            .addCase(donorRegistrationThunk.fulfilled,(state,action)=>{
                // console.log("action : ",action);
                state.status = action.payload.status;
                if(state.status==200){
                    state.message = "Donor Registration Successfull"
                }else{
                    state.message = "Error while Donor Registration"
                }
            })
            .addCase(donorRegistrationThunk.rejected,(state)=>{})
    }
});

export {donorRegistrationThunk};
export const {resetMessage} = donorSlice.actions;
export default donorSlice.reducer;