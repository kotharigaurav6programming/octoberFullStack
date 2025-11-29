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
            console.log(action);
            state.userArray = [...state.userArray,action.payload]
            console.log(state.userArray); 
        },
        deleteUser : (state,action)=>{

        }
    }
});

export const {addUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;