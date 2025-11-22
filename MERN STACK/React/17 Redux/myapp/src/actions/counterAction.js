import { DECREMENT, INCREMENT, RESET, SET_COUNTER_TITLE } from "./actionType";

export const incrementFun = ()=>({type:INCREMENT});
export const decrementFun = ()=>({type:DECREMENT});
export const reset = ()=>({type:RESET});
export const set_counter_title = (title)=>{
    return {
        type: SET_COUNTER_TITLE,
        payload : {
            title:title
        }
    }
}

/*
<button onClick={()=>{set_counter_title("...")}}>click</button>
dispatch( {
        type: SET_COUNTER_TITLE,
        payload : {
            title:title
        }
    })


    reducer ------> action = {
        type: SET_COUNTER_TITLE,
        payload : {
            title:title
        }
    }

    action.type 
    action.payload.title
*/