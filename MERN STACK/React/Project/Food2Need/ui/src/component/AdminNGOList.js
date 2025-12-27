import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
import { adminViewNGOListThunk } from '../store/adminSlice.js';

function AdminHome(){
        const adminObj = useSelector(state=>state.admin);
        const navigate = useNavigate(); 
        const dispatch = useDispatch();
    
    if(adminObj.status==500 || adminObj.status==undefined)
        navigate("/adminLogin");

     useEffect(()=>{
            dispatch(setNavShow("admin"));
            dispatch(adminViewNGOListThunk());
        });

    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {adminObj.loggedInEmail}</h2> <br/>
            <h2>{adminObj.message}</h2>
            
             {/* {console.log(adminObj.ngoArray)}    */}
             { adminObj.ngoArray.length!=0  ? 
                <div>Data Found</div> : <div>Data Not Found</div>
             }
        </blockquote>
    </div>);
}

export default AdminHome;