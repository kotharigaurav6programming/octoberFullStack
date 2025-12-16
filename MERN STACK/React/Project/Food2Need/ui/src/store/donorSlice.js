import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedDonorURL } from "../utils.js";
import jscookie from 'js-cookie';
const donorCookieData = jscookie.get("donorCookieData");

const initialState = {
    loggedInEmail : '',
    donorObj : {},
    donorArray : [],
    status : '',
    message : ''
};
const donorLoginThunk = createAsyncThunk('donorSlice/donorLoginThunk',async(donorObj)=>{
    try{
        const result = await axios.post(requestedDonorURL+'/loginDonor',donorObj);
        // console.log("result received : ",result);
        jscookie.set("donorTokenData",result.data.donorToken,{expires:1});
        jscookie.set("donorEmail",result.data._id,{expires:1});
        return result;
    }catch(error){
        console.log("Error in donorLoginThunk : ",error);
    }
});

const donorRegistrationThunk = createAsyncThunk('donorSlice/donorRegistrationThunk',async(donorObj)=>{
    var result;
    try{
        result = await axios.post(requestedDonorURL+'/addDonor',donorObj);
        console.log("result received : ",result);
        return result;
    }catch(error){
        console.log("Error in donorRegistrationThunk : ",error);
        return result;
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

        builder
            .addCase(donorLoginThunk.pending,(state)=>{})
            .addCase(donorLoginThunk.fulfilled,(state,action)=>{
                console.log("action : ",action);
                // state.status = action.payload.status;
                // if(state.status==200)
                //     state.loggedInEmail = action.payload.data._id;       
                
                // we need to manage condition on action.payload = undefined
            })
            .addCase(donorLoginThunk.rejected,(state)=>{})
    }
});

export {donorRegistrationThunk,donorLoginThunk};
export const {resetMessage} = donorSlice.actions;
export default donorSlice.reducer;