import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("Counting");
    const decrement = ()=>{
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(<>
        <h2>{title} : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={function(){setCount(count+3)}}>IncrementByThree</button>
        <button onClick={()=>{setTitle("Count")}}>Change Title</button>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);