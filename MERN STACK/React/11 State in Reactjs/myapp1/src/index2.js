import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [obj,setObj] = useState({name:"",age:0});
    const handleSubmit = (event)=>{
        event.preventDefault();
            setObj({
                name,age
            });
        event.target.reset();
    }
    return(<>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Enter Name'
                type="text"
                name="username"
                id="username"
                onChange={(event)=>{
                    setName(event.target.value);
                }}
            /> <br/>
            <input
                placeholder='Enter Age'
                type="text"
                name="age"
                id="age"
                onChange={(event)=>{
                    setAge(event.target.value);
                }}
            /> <br/>
            <input
                value="Submit"
                type="submit"
            /> <br/>
        </form>
        <h2>{obj.name=="" ? "" : "Name : "+obj.name}</h2>
        <h2>{obj.age=="" ? "" : "Age : "+obj.age}</h2>

    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);