import React from 'react';
import {createRoot} from 'react-dom/client';
import loginDonor from '../images/donorLogin.jpg'
import { Link } from 'react-router-dom';
function RegistrationNGO(){
    const getData = (event)=>{

    }
    return (<div>
        <div id="donorLeft">
            <img src={loginDonor} id="donorLogin" alt="Login"/>
        </div>
        <div id="donorRight">
            <h2>NGO Registration</h2> <br/>
            <form>
                <input
                    type="text"
                    placeholder='Enter name'
                    name="name"
                    id="name"
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