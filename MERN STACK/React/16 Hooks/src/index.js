// example showing the concept of useReducer
import React, { useReducer } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

var initialState = {
    count : 0
};
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment' : return {...state,count:state.count+action.value};
        case 'decrement' : return {...state,count:state.count-action.value};
        case 'reset' : return {count:0};
        default : return state;
    }
}
function MyComponent(){
    const [counter , dispatch] = useReducer(reducer,initialState);    
    return (<>
        <h2>Count : {counter.count}</h2>
        <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:'reset',value:0})}}>Reset</button>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);

