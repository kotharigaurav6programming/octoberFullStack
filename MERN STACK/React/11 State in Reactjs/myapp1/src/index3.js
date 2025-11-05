import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    const [dummy,setDummy] = useState({username:"",age:0});
    const [obj,setObj] = useState({username:"",age:0});
    const getData = (event)=>{
        const {name,value} = event.target;
        console.log(name+" : "+value);
        setDummy({
            ...dummy,
            [name] : value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            setObj(dummy);
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
                onChange={getData}
            /> <br/>
            <input
                placeholder='Enter Age'
                type="text"
                name="age"
                id="age"
                onChange={getData}
            /> <br/>
            <input
                value="Submit"
                type="submit"
            /> <br/>
        </form>
        <h2>{obj.username=="" ? "" : "Name : "+obj.username}</h2>
        <h2>{obj.age=="" ? "" : "Age : "+obj.age}</h2>

    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);

