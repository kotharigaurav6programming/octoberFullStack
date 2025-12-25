import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link } from 'react-router-dom';
import { resetMessage } from '../store/donorSlice.js';
import { useDispatch } from 'react-redux';

function LoginNGO(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetMessage(''));
    });
    var message;

    var urlSearch = new URLSearchParams(window.location.search);
    if(urlSearch.size==1)
       message = urlSearch.get("message");

    const getData = (event)=>{

    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>NGO Login</h2> <br/>
            {message}
            <form>
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
            <br/>
            <Link to="/ngoRegistration" id="registrationLink">
                    Yet Not Registered ? Register Here
            </Link>
            
        </div>
    </div>);
}

export default LoginNGO;