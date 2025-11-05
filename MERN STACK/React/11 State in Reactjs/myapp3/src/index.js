import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Display from './Display.js';
function MyComponent(){
    const [userObj,setUserObj] = useState({});
    // console.log(userObj.username);
    const [userArray,setUserArray] = useState([]);
    const [index,setIndex] = useState(-1);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name] : value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(index==-1){
            setUserArray([
                ...userArray,
                userObj
            ]);
        }else{
            userArray.splice(index,1,userObj);
            setUserArray([...userArray]);
            setIndex(-1);
        }
        event.target.reset();
        setUserObj({
            username:"",
            email:"",
            password:"",
            address:""
        });
    }
    const updateData = (userObject)=>{
        setUserObj(userObject.obj);
        setIndex(userObject.index);
    }
    const deleteData = (index)=>{
        userArray.splice(index,1);
        setUserArray([...userArray]);
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
                    value={userObj.username}
                    onChange={getData}
                /> <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    value={userObj.email}
                    onChange={getData}
                /> <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    value={userObj.password}
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    value={userObj.address}
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value={index==-1 ? "Add Details" : "Update Details"}
                /> <br/>
                <input
                    type="reset"
                    value="Reset Details"
                /> <br/>
            </form>
        </div>
        <div id="rightSection">
            <Display userData={userArray} userUpdate={updateData} userDelete={deleteData}/>
        </div>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);