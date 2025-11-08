import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count+1);
        },1000);
        return  ()=>clearInterval(timer);
    },[count]);
    return (<>
        <h2>Count : {count}</h2>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);