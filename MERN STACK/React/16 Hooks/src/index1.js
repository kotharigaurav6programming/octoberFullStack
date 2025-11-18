// example showing the concept of prop drilling
import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
function MyComponent(){
    const [firstName,setFirstName] = useState("Andrew");
    const [lastName,setLastName] = useState("Anderson");
    return (<>
        <ClassA first={firstName} last = {lastName}/>
    </>);
}
function ClassA(props){
    return (<>
        <ClassB first={props.first} last={props.last}/>
    </>);
}
function ClassB(props){
    return (<>
        <ClassC first={props.first} last={props.last}/>
    </>);
}
function ClassC(props){
    return (<>
        <h2>First name : {props.first}</h2>
        <h2>Last name : {props.last}</h2>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);