import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
import { donorSurplusFoodListThunk } from '../store/donorSlice.js';
import { donorPath } from '../utils.js';

function DonorViewRequest(){
    const donorObj = useSelector(state=>state.donor);
    console.log("-=-=-=-=-=- : ",donorObj.loggedInEmail);
    
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    // console.log("donorObj : ",donorObj);
    if(donorObj.status==500 || donorObj.status==undefined)
        navigate("/donorLogin");

    useEffect(()=>{
            console.log("inside useeffect -=-=-=-=-=- : ",donorObj.loggedInEmail);

        dispatch(setNavShow("donor"));
         dispatch(donorSurplusFoodListThunk({_id:donorObj.loggedInEmail}));
    },[donorObj.loggedInEmail]);
    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {donorObj.loggedInEmail} For Donation</h2> <br/>
            <h2>{donorObj.message}</h2>
                     { donorObj.surplusFoodArray.length!=0  ? 
                        <div><h2>Surplus Food List</h2> <br/>
                            <table style={{fontSize:"14px"}} border={1} cellPadding={5} cellSpacing={0}>
                                <tr>
                                    <th>S.No</th>
                                    <th>SurplusId</th>
                                    <th>UserId</th>
                                    <th>FunctionName</th>
                                    <th>Contact</th>
                                    <th>Venue</th>
                                    <th>Items</th>
                                    <th>Quantity</th>
                                    <th>PickUpDate</th>
                                    <th>PickUpTill</th>
                                    <th>Category</th>
                                    <th>FoodPic</th>
                                    <th>PostAt</th>
                                    <th>NGOName</th>
                                 </tr>
                                {donorObj.surplusFoodArray.map((obj,index)=>{
                                    return(<tr>
                                        <td>{index+1}</td>
                                        <td>{obj.surplusId}</td>
                                        <td>{obj.userId}</td>
                                        <td>{obj.functionName}</td>
                                        <td>{obj.contact}</td>
                                        <td>{obj.venue}</td>
                                        <td>{obj.items}</td>
                                        <td>{obj.quantity}</td>
                                        <td>{obj.pickupdate}</td>
                                        <td>{obj.pickuptill}</td>
                                        <td>{obj.category}</td>
                                        <td>
                                            <img 
                                            src={donorPath+`/${obj.foodPic}`} 
                                            height="70" width="70" alt="foodImage"/>
                                        </td>
                                        <td>{obj.createdAt}</td>
                                        <td>{obj.allocatedNgoId=="" ? <div>
                                            Pending</div> : <div>{obj.ngoName}<br/>
                                            ({obj.ngoContact})
                                            </div> }</td>
                                     
                                    </tr>);
                                })}
                            </table>
                        </div> : <div>Data Not Found</div>
                     }
        
        
        
        </blockquote>
    </div>);
}

export default DonorViewRequest;