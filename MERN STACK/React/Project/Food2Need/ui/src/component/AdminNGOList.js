import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
import { adminVerifyNGOThunk, adminViewNGOListThunk } from '../store/adminSlice.js';
import { imagePath } from '../utils.js';

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

    const handleSubmit = (email)=>{
        // alert(email);
        const obj = {_id:email};
        dispatch(adminVerifyNGOThunk(obj));
    }    
    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {adminObj.loggedInEmail}</h2> <br/>
            <h2>{adminObj.message}</h2>
            
             {/* {console.log(adminObj.ngoArray)}    */}
             { adminObj.ngoArray.length!=0  ? 
                <div><h2>NGO List</h2> <br/>
                    <table style={{fontSize:"14px"}} border={1} cellPadding={5} cellSpacing={0}>
                        <tr>
                            <th>S.No</th>
                            <th>Email</th>
                            <th>NGOId</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Address</th>
                            <th>Pic</th>
                            <th>Email<br/>Verify</th>
                            <th>Admin<br/>Verify</th>
                         </tr>
                        {adminObj.ngoArray.map((obj,index)=>{
                            return(<tr>
                                <td>{index+1}</td>
                                <td>{obj._id}</td>
                                <td>{obj.ngoId}</td>
                                <td>{obj.ngoName}</td>
                                <td>{obj.contact}</td>
                                <td>{obj.category}</td>
                                <td>{obj.description}</td>
                                <td>{obj.address}</td>
                                <td>
                                    <img 
                                    src={imagePath+`/${obj.ngoPic}`} 
                                    height="70" width="70" alt="ngoImage"/>
                                </td>
                                <td>{String(obj.emailVerify)}</td>
                                <td>{String(obj.adminVerify)=="false" ? <div>
                                    <form onSubmit={()=>{handleSubmit(`${obj._id}`)}}>
                                        <button style={{padding:"5px",backgroundColor:"crimson",color:"white"}}>Verify</button>
                                    </form>
                                </div> : "Verified"}</td>
                            </tr>);
                        })}
                    </table>
                </div> : <div>Data Not Found</div>
             }
        </blockquote>
    </div>);
}

export default AdminHome;