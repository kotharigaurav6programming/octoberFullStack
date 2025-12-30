import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedNGOURL } from "../utils.js";
import jscookie from 'js-cookie';
const ngoTokenData = jscookie.get("ngoTokenData");

const initialState = {
    loggedInEmail : '',
    ngoObj : {},
    ngoArray : [],
    status : '',
    message : ''
};
const ngoLoginThunk = createAsyncThunk('ngoSlice/ngoLoginThunk',async(ngoObj)=>{
    try{
        const result = await axios.post(requestedNGOURL+'/loginNgo',ngoObj);
         console.log("result received : ",result);
        jscookie.set("ngoTokenData",result.data.ngoToken,{expires:1});
        jscookie.set("ngoEmail",result.data._id,{expires:1});
        return result;
    }catch(error){
        console.log("Error in ngoLoginThunk : ",error);
    }
});

const ngoRegistrationThunk = createAsyncThunk('ngoSlice/ngoRegistrationThunk',async(ngoObj)=>{
    var result;
    try{
        result = await axios.post(requestedNGOURL+'/addNGO',ngoObj);
        console.log("result received : ",result);
        return result;
    }catch(error){
        console.log("Error in ngoRegistrationThunk : ",error);
        return result;
    }
});

const ngoSlice = createSlice({
    name:"ngoSlice",
    initialState,
    reducers:{
        resetMessage : (state,action)=>{
            state.message = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(ngoRegistrationThunk.pending,(state)=>{})
            .addCase(ngoRegistrationThunk.fulfilled,(state,action)=>{
                // console.log("action : ",action);
                state.status = action.payload?.status;
                if(state.status==200){
                    state.message = "NGO Registration Successfull"
                }else{
                    state.message = "Error while NGO Registration"
                }
            })
            .addCase(ngoRegistrationThunk.rejected,(state)=>{})

        builder
            .addCase(ngoLoginThunk.pending,(state)=>{})
            .addCase(ngoLoginThunk.fulfilled,(state,action)=>{
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
            .addCase(ngoLoginThunk.rejected,(state)=>{})

        }
});

export {ngoRegistrationThunk,ngoLoginThunk};
export const {resetMessage} = ngoSlice.actions;
export default ngoSlice.reducer;