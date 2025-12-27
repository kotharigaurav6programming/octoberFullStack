import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLoginThunk } from '../store/adminSlice.js';

function LoginAdmin(){
    const adminObj = useSelector(state=> state.admin);
    const [adminData,setAdminData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setAdminData({
            ...adminData,
            [name]:value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            dispatch(adminLoginThunk(adminData));
            navigate('/adminHome');
        event.target.reset();
    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>Admin Login</h2> <br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
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
            
        </div>
    </div>);
}

export default LoginAdmin;