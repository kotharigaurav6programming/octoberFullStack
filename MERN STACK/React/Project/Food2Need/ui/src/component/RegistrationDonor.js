import React from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link } from 'react-router-dom';
function RegistrationDonor(){
    const getData = (event)=>{

    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>Donor Registration</h2> <br/>
            <form>
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