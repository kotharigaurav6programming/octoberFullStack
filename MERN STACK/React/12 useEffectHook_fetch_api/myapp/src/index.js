import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Display from './Display.js';

function MyComponent(){
    const [userObj,setUserObj] = useState({});
    const [userArray,setUserArray] = useState([]);
    const [status,setStatus] = useState(false);

    const getServerData = async()=>{
        try{
            const response = await fetch('http://localhost:3000/profile');
            const arr = await response.json();
            setUserArray(arr);    
        }catch(error){
            console.log("Error : "+error);
        }
    }
    useEffect(()=>{
        getServerData();
    },[status]);

    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name] : value
        });
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await fetch("http://localhost:3000/profile",{
            method : "POST",
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(userObj)
        })
        setStatus(!status);
        event.target.reset();
    }
    return (<div>
        <div id="leftSection">
            <br/><h2>Fill Details</h2> <br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value="Add Details"
                /> <br/>
                <input
                    type="reset"
                    value="Reset Details"
                /> <br/>
            </form>
        </div>
        <div id="rightSection">
            <Display userData={userArray}/>
        </div>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);