import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { resetMessage } from '../store/donorSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { ngoLoginThunk } from '../store/ngoSlice.js';

function LoginNGO(){
    const ngoObj = useSelector(state=> state.ngo);
    const [ngoData,setNgoData] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetMessage(''));
    });
    var message;

    var urlSearch = new URLSearchParams(window.location.search);
    if(urlSearch.size==1)
       message = urlSearch.get("message");

   const getData = (event)=>{
        const {name,value} = event.target;
        setNgoData({
            ...ngoData,
            [name]:value
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            dispatch(ngoLoginThunk(ngoData));
            navigate('/ngoHome');
        event.target.reset();
    }

    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>NGO Login</h2> <br/>
            {message}
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
            <Link to="/ngoRegistration" id="registrationLink">
                    Yet Not Registered ? Register Here
            </Link>
            
        </div>
    </div>);
}

export default LoginNGO;