import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { donorLoginThunk } from '../store/donorSlice.js';
function LoginDonor(){
    const donorObj = useSelector(state=> state.donor);
    const [donorData,setDonorData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setDonorData({
            ...donorData,
            [name]:value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            dispatch(donorLoginThunk(donorData));
            navigate('/donorHome');
        event.target.reset();
    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>Donor Login</h2> <br/>
            {donorObj.message}
            <form onSubmit={handleSubmit}>
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
                /> <br/> <br/>
                <input
                    type="submit"
                    value="Login"
                /> <br/> 
                <input
                    type="reset"
                    value="Reset"
                /> 
                <br/>
            </form>
            <br/>
            <Link to="/donorRegistration" id="registrationLink">
                    Yet Not Registered ? Register Here
            </Link>
            
        </div>
    </div>);
}

export default LoginDonor;