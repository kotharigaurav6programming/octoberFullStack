import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
function NGOHome(){
    const ngoObj = useSelector(state=>state.ngo);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    // console.log("ngoObj : ",ngoObj);
    if(ngoObj.status==500 || ngoObj.status==undefined)
        navigate("/ngoLogin");

    useEffect(()=>{
        dispatch(setNavShow("ngo"));
    });
    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {ngoObj.loggedInEmail} For Donation</h2> <br/>
            <h2>{ngoObj.message}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </blockquote>
    </div>);
}

export default NGOHome;