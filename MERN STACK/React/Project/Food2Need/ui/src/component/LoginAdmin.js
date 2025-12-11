import React from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link } from 'react-router-dom';
function LoginAdmin(){
    const getData = (event)=>{

    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>Admin Login</h2> <br/>
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
            
        </div>
    </div>);
}

export default LoginAdmin;