import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userArray : [],
    userObj : {},
    navShow:"home",
    index:-1
}
const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            // console.log(action);
            if(state.index==-1){
                state.userArray = [...state.userArray,action.payload]
                console.log(state.userArray); 
            }else{
                state.userArray.splice(state.index,1,action.payload);
                state.userArray=[...state.userArray];
                state.index=-1;
            }
        },
        deleteUser : (state,action)=>{
            state.userArray.splice(action.payload,1);
            state.userArray = [...state.userArray];
        },
        updateUser : (state,action)=>{
            console.log(action);
            
            state.userObj = action.payload.obj;
            state.index = action.payload.index;
        }
    }
});

export const {addUser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer;