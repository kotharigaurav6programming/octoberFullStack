// example showing the concept of useCallback
import React, { useCallback, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

function MyComponent(){
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();
    const res = useCallback(()=>{
        console.log("example of useCallback");
        var answer = parseInt(num1)+parseInt(num2);
        setResult(answer);        
    },[num1,num2]);
    return (<>
        <h2>Example showing the concept of UseCallback</h2>
        <input
            type='text'
            placeholder='Enter num1'
            name="num1"
            onChange={(event)=>{
                setNum1(event.target.value);
            }}
        /> <br/>
        <input
            type='text'
            placeholder='Enter num2'
            name="num2"
            onChange={(event)=>{
                setNum2(event.target.value);
            }}
        /><br/>
        <input
            type='submit'
            value="submit"
            onClick={res}
        /><br/>
        <h1>Result : {result}</h1>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);

