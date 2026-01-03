import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavShow } from '../store/commonSlice.js';
import { surplusFoodListThunk,ngoApplyForFoodThunk } from '../store/ngoSlice.js';
import { donorPath } from '../utils.js';

function SurplusFoodList(){
        const ngoObj = useSelector(state=>state.ngo);
        const navigate = useNavigate(); 
        const dispatch = useDispatch();
    
    if(ngoObj.status==500 || ngoObj.status==undefined)
        navigate("/ngoLogin");

     useEffect(()=>{
            dispatch(setNavShow("ngo"));
            dispatch(surplusFoodListThunk());
        });

    const handleSubmit = (surplusId)=>{
         const obj = {surplusId,ngoEmail:ngoObj.loggedInEmail};
         dispatch(ngoApplyForFoodThunk(obj));
    }    
    return (<div>
        <br/>
        <blockquote>
            <br/>
            <h2>Welcome {ngoObj.loggedInEmail}</h2> <br/>
            <h2>{ngoObj.message}</h2>
            
             {/* {console.log(adminObj.ngoArray)}    */}
             { ngoObj.surplusFoodArray.length!=0  ? 
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
                            <th>DonateStatus</th>
                         </tr>
                        {ngoObj.surplusFoodArray.map((obj,index)=>{
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
                                    <form onSubmit={()=>{handleSubmit(`${obj.surplusId}`)}}>
                                        <button style={{padding:"5px",backgroundColor:"crimson",color:"white"}}>Active</button>
                                    </form>
                                </div> : "RequestClosed"}</td>
                             
                            </tr>);
                        })}
                    </table>
                </div> : <div>Data Not Found</div>
             }
        </blockquote>
    </div>);
}

export default SurplusFoodList;