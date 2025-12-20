import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import loginDonor from '../images/donorLogin.jpg'
import { donorAddFoodThunk } from '../store/donorSlice';

function DonorAddFood(){
    const donorObj = useSelector(state=>state.donor);
    const[foodObj,setFoodObj] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        var {name,value} = event.target;
        if(event.target.type=="file"){
            // console.log("event.target : ",event.target.files);
            value = event.target.files[0];
             console.log("value of file : ",value);
            setFoodObj({
                ...foodObj,
                [name]:value
            });
        }else{
            setFoodObj({
                ...foodObj,
                [name]:value
            })
        }
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        for(var key in foodObj){
            if(foodObj[key]){
                formData.append(key,foodObj[key]);
            }
        }
        formData.append("userEmailId",donorObj.loggedInEmail);
        console.log("formData : ",formData);
        
        dispatch(donorAddFoodThunk(formData));
        navigate("/donorHome");
        event.target.reset();
    }
    return (<div>
          <div id="donorLeft">
                    <img src={loginDonor} id="donorLogin" alt="Login"/>
                </div>
        <div id="donorRight">
            <h2>Donor Add Food</h2> <br/>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <input
                    type="text"
                    placeholder='Enter Function Name'
                    name="functionName"
                    id="functionName"
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder='Enter Venue'
                    name="venue"
                    id="venue"
                    onChange={getData}
                /> <br/>
                 <input
                    type="text"
                    placeholder='Enter 10-Digit Mobile Number'
                    name="contact"
                    id="contact"
                    onChange={getData}
                /> <br/>
                <textarea
                    placeholder='Enter Items'
                    name="items"
                    id="items"
                    onChange={getData}
                ></textarea> <br/>
                <input
                    type="number"
                    placeholder='Enter Available Quantity(Persons)'
                    name="quantity"
                    id="quantity"
                    min={1}
                    onChange={getData}
                /> <br/>
                <input
                    type="date"
                    name="pickupdate"
                    id="pickupdate"
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder='Enter Pick Up Till Time'
                    name="pickuptill"
                    id="pickuptill"
                    onChange={getData}
                /> <br/>
                <select name="category" id="category" onChange={getData}>
                    <option value="">Select Category</option>
                    <option value="Veg">Veg</option>
                    <option value="NonVeg">NonVeg</option>
                </select> <br/>
                <input
                    type="file"
                    name="foodPic"
                    id="foodPic"
                    onChange={getData}
                /> <br/>
                 <br/>
                <input
                    type="submit"
                    value="Add Food"
                /> <br/> 
                <input
                    type="reset"
                    value="Reset"
                /> 
                <br/>
            </form>
            <br/>
            
        </div>
    </div>);
}

export default DonorAddFood;