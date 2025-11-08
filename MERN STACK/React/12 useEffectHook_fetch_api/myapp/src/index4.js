import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        var timer;
        if(count<10){
            timer = setInterval(()=>{
                setCount(count+1);
            },1000);
            return  ()=>clearInterval(timer);
        }else{
            clearInterval(timer);
        }
    },[count]);
    return (<>
        <h2>Count : {count}</h2>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);