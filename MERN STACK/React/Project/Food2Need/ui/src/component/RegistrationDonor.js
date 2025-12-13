import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import loginDonor from '../images/donorLogin.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { donorRegistrationThunk } from '../store/donorSlice.js';
import { resetMessage } from '../store/donorSlice.js';

function RegistrationDonor(){
    const [donorData,setDonorData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
        useEffect(()=>{
            dispatch(resetMessage(''));
        });
    
    const getData = (event)=>{
        const {name,value} = event.target;
        setDonorData({
            ...donorData,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(donorRegistrationThunk(donorData));
        navigate("/donorLogin");
        event.target.reset();
    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>Donor Registration</h2> <br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
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
                /> <br/> <br/>
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
            <Link to="/donorLogin" id="registrationLink">
                    Already Registered ? Login Here
            </Link>
            
        </div>
    </div>);
}

export default RegistrationDonor;