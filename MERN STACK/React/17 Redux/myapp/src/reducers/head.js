import { SET_TAGLINE } from "../actions/actionType.js";

const initialState = {
    tagline : "This is default tag line"
}
export default function common(state=initialState,action){
    switch(action.type){
        case SET_TAGLINE : 
            return {
                ...state,
                tagline : action.payload.tagLine
            }
        default : 
            return state; 
    }
}