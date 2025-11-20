// example showing the concept of useReducer
import React, { useReducer } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

var initialState = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment' : return state+1;
        case 'decrement' : return state-1;
        case 'reset' : return 0;
        default : return state;
    }
}
function MyComponent(){
    const [count , dispatch] = useReducer(reducer,initialState);    
    return (<>
        <h2>Count : {count}</h2>
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);

