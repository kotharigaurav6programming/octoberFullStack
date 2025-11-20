// example showing the concept of memo and useMemo
import React,{ memo, useMemo, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const Memoized = memo((props)=>{
    console.log("memoized function");
    return (<>
        <br/>Hello {props.fname} your surname is {props.lname} 
    </>);
});
const UnMemoized = (props)=>{
    console.log("unmemoized function");
    return (<>
        <br/>Hello {props.fname} your surname is {props.lname} 
    </>);
}
function MyComponent(){
    const [fname,setFname] = useState("Andrew");
    const [lname,setLname] = useState("Anderson");
    const [count,setCount] = useState(0);
    
    return (<>
        <h2>Count : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        <h2>Memoized Component Result</h2>
        <Memoized fname={fname} lname={lname}/>
        
        <h2>UnMemoized Component Result</h2>
        <UnMemoized fname={fname} lname={lname}/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);