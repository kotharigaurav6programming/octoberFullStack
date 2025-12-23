import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ngoRegistrationThunk } from '../store/ngoSlice.js';
function RegistrationNGO(){
    const [ngoData,setNGOData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
        
    const getData = (event)=>{
        var {name,value} = event.target;
        if(event.target.type=="file"){
            // console.log("event.target : ",event.target.files);
            value = event.target.files[0];
             console.log("value of file : ",value);
            setNGOData({
                ...ngoData,
                [name]:value
            });
        }else{
            setNGOData({
                ...ngoData,
                [name]:value
            })
        }
    }
   
     const handleSubmit = (event)=>{
            event.preventDefault();
            const formData = new FormData();
            for(var key in ngoData){
                if(ngoData[key]){
                    formData.append(key,ngoData[key]);
                }
            }
            console.log("formData : ",formData);
            
            dispatch(ngoRegistrationThunk(formData));
        navigate("/ngoLogin");
        event.target.reset();
        }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>NGO Registration</h2> <br/>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <input
                    type="text"
                    placeholder='Enter name'
                    name="ngoName"
                    id="ngoName"
                    onChange={getData}
                /> <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="_id"
                    id="_id"
                    onChange={getData}
                /> <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    onChange={getData}
                /> <br/>
                 <input
                    type="text"
                    placeholder='Enter 10-Digit Mobile Number'
                    name="contact"
                    id="contact"
                    onChange={getData}
                /> <br/> 
                 <select name="category" id="category" onChange={getData}>
                    <option value="">Select Category</option>
                    <option value="OrphanAge">OrphanAge</option>
                    <option value="OldAge Home">OldAge Home</option>
                    <option value="Disables">Disables</option>
                    <option value="Shelters">Shelters</option>
                 </select>
                <br/>
                 <textarea
                    placeholder='Enter Description'
                    name="description"
                    id="description"
                    onChange={getData}
                ></textarea> <br/> 
                 <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    onChange={getData}
                /> <br/> 
                <input
                    type="file"
                    name="ngoPic"
                    id="ngoPic"
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value="Registration"
                /> <br/> 
                <input
                    type="reset"
                    value="Reset"
                /> 
                <br/>
            </form>
            <br/>
            <Link to="/ngoLogin" id="registrationLink">
                    Already Registered ? Login Here
            </Link>
            
        </div>
    </div>);
}

export default RegistrationNGO;