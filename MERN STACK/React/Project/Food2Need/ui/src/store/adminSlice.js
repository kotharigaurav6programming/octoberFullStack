import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestedAdminURL } from "../utils.js";
import jscookie from 'js-cookie';
import axios from "axios";
const adminTokenData = jscookie.get("adminTokenData");

const initialState = {
    loggedInEmail : '',
    adminObj : {},
    donorArray : [],
    surplusFoodArray : [],
    ngoArray : [],
    status : '',
    message : ''
};
const adminLoginThunk = createAsyncThunk('adminSlice/adminLoginThunk',async(adminObj)=>{
    try{
        const result = await axios.post(requestedAdminURL+'/loginAdmin',adminObj);
         console.log("result received : ",result);
        jscookie.set("adminTokenData",result.data.adminToken,{expires:1});
        jscookie.set("adminEmail",result.data.email,{expires:1});
        return result;
    }catch(error){
        console.log("Error in adminLoginThunk : ",error);
    }
});
const adminViewNGOListThunk = createAsyncThunk('adminSlice/adminViewNGOListThunk',async()=>{
    try{
        const result = await axios.get(requestedAdminURL+'/adminViewNGOList?adminTokenData='+adminTokenData);
        console.log("result received : ",result);
        return result;
    }catch(error){
        console.log("Error in adminViewNGOListThunk : ",error);
    }
});
const adminVerifyNGOThunk = createAsyncThunk('adminSlice/adminVerifyNGOThunk',async(ngoEmailObj)=>{
    try{
        const result = await axios.post(requestedAdminURL+'/adminVerifyNGO?adminTokenData='+adminTokenData,ngoEmailObj);
        console.log("result received : ",result);
        return result;
    }catch(error){
        console.log("Error in adminVerifyNGOThunk : ",error);
    }
});

const adminSlice = createSlice({
    name:"adminSlice",
    initialState,
    reducers:{

    },
        extraReducers:(builder)=>{
            builder
                .addCase(adminLoginThunk.pending,(state)=>{})
                .addCase(adminLoginThunk.fulfilled,(state,action)=>{
                    console.log("action : ",action);
                    if(action.payload == undefined){
                        state.status = 500;
                    }
                    if(action.payload?.status==200){
                        state.loggedInEmail = action.payload.data.email;       
                        console.log("state.loggedInEmail : ",state.loggedInEmail);
                        state.status = action.payload.status;
                    }
                })
                .addCase(adminLoginThunk.rejected,(state)=>{})
    
            builder
                .addCase(adminViewNGOListThunk.pending,(state)=>{})
                .addCase(adminViewNGOListThunk.fulfilled,(state,action)=>{
                    console.log("action : ",action);
                    if(action.payload == undefined){
                        state.status = 500;
                    }
                    if(action.payload?.status==200){
                        state.loggedInEmail = action.payload.data.email;
                        state.ngoArray = action.payload.data.ngoList;       
                        console.log("state.loggedInEmail : ",state.loggedInEmail);
                        state.status = action.payload.status;
                    }
                })
                .addCase(adminViewNGOListThunk.rejected,(state)=>{})

            builder
                .addCase(adminVerifyNGOThunk.pending,(state)=>{})
                .addCase(adminVerifyNGOThunk.fulfilled,(state,action)=>{
                    console.log("action : ",action);
                    if(action.payload == undefined){
                        state.status = 500;
                    }
                    if(action.payload?.status==200){
                        state.loggedInEmail = action.payload.data.email;
                        state.ngoArray = action.payload.data.ngoList;       
                        console.log("state.loggedInEmail : ",state.loggedInEmail);
                        state.status = action.payload.status;
                    }
                })
                .addCase(adminVerifyNGOThunk.rejected,(state)=>{})
                
            }
});

export {adminLoginThunk,adminViewNGOListThunk,adminVerifyNGOThunk};
//export {} = adminSlice.actions;
export default adminSlice.reducer;