import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedDonorURL } from "../utils.js";
import jscookie from 'js-cookie';
const donorTokenData = jscookie.get("donorTokenData");

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
         console.log("result received : ",result);
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
const donorAddFoodThunk = createAsyncThunk('donorSlice/donorAddFoodThunk',async(foodObj)=>{
    try{
        var result = await axios.post(requestedDonorURL+'/donorAddFood',foodObj);
        console.log("result received in thunk : ",result);
        return result;
    }catch(error){
        console.log("Error in donorAddFoodThunk : ",error);
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
                if(action.payload == undefined){
                    state.status = 500;
                }
                if(action.payload?.status==200){
                    state.loggedInEmail = action.payload.data._id;       
                    console.log("state.loggedInEmail : ",state.loggedInEmail);
                    state.status = action.payload.status;
                }
            })
            .addCase(donorLoginThunk.rejected,(state)=>{})

        builder
            .addCase(donorAddFoodThunk.pending,(state)=>{})
            .addCase(donorAddFoodThunk.fulfilled,(state,action)=>{
                console.log("action : ",action);
                if(action.payload == undefined){
                    state.status = 500;
                }
                state.status = action.payload?.status;
                if(state.status==200){
                    state.message = "Surplus Food Added Successfull"
                }else{
                    state.message = "Error while Adding Surplus Food"
                }
            })
            .addCase(donorAddFoodThunk.rejected,(state)=>{})

        }
});

export {donorRegistrationThunk,donorLoginThunk,donorAddFoodThunk};
export const {resetMessage} = donorSlice.actions;
export default donorSlice.reducer;