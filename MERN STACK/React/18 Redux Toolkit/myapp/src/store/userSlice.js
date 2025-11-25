import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterTitle : "Counter",
    count : 0,
    tagLine : "This is Tag Line"
}

const user = createSlice({
    name:"userSlice",
    initialState,
    reducers : {
        increment : (state)=>{
            state.count+=1;
        },
        decrement : (state)=>{
            state.count-=1;
        },
        reset : (state)=>{
            state.count=0;
        },
        setTag : (state,action)=>{
            console.log("setTagLine : ",action);
            state.tagLine = action.payload;
        } 
    }
});
export const {increment,decrement,reset,setTag} = user.actions;
export default user.reducer;
/*
export const { increment } = {
                                increment : ()=>{
                                    return {type : "increment"}
                                }
                            }

    increment = ()=>{
                        return {type : "increment"}
                    }
*/