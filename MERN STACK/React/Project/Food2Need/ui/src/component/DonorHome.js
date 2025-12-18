import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
function DonorHome(){
    const donorObj = useSelector(state=>state.donor);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    // console.log("donorObj : ",donorObj);
    if(donorObj.status==500)
        navigate("/donorLogin");

    useEffect(()=>{
        dispatch(setNavShow("donor"));
    });
    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {donorObj.loggedInEmail} For Donation</h2> <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </blockquote>
    </div>);
}

export default DonorHome;