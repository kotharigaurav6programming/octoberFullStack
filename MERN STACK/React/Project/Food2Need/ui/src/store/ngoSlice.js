import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedNGOURL } from "../utils.js";
import jscookie from 'js-cookie';
const ngoCookieData = jscookie.get("ngoCookieData");

const initialState = {
    loggedInEmail : '',
    ngoObj : {},
    ngoArray : [],
    status : '',
    message : ''
};
// const donorLoginThunk = createAsyncThunk('donorSlice/donorLoginThunk',async(donorObj)=>{
//     try{
//         const result = await axios.post(requestedDonorURL+'/loginDonor',donorObj);
//          console.log("result received : ",result);
//         jscookie.set("donorTokenData",result.data.donorToken,{expires:1});
//         jscookie.set("donorEmail",result.data._id,{expires:1});
//         return result;
//     }catch(error){
//         console.log("Error in donorLoginThunk : ",error);
//     }
// });

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

        // builder
        //     .addCase(donorLoginThunk.pending,(state)=>{})
        //     .addCase(donorLoginThunk.fulfilled,(state,action)=>{
        //         console.log("action : ",action);
        //         if(action.payload == undefined){
        //             state.status = 500;
        //         }
        //         if(action.payload?.status==200){
        //             state.loggedInEmail = action.payload.data._id;       
        //             console.log("state.loggedInEmail : ",state.loggedInEmail);
        //             state.status = action.payload.status;
        //         }
        //     })
        //     .addCase(donorLoginThunk.rejected,(state)=>{})

        }
});

export {ngoRegistrationThunk};
export const {resetMessage} = ngoSlice.actions;
export default ngoSlice.reducer;