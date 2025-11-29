import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
function AddUser(){
    const [userObj,setUserObj] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addUser(userObj));
        navigate("/addUser",{
            state:{
                message : "User Added Successfully"
            }
        });
        event.target.reset();
    }
    return (<>
        <h2>Add User</h2>
        {location.state?.message ? location.state.message : ""}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                id="username"
                name="username"
                onChange={getData}
            /> <br/>
            <input
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                onChange={getData}
            /> <br/>
            <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
               onChange={getData}
            /> <br/>
            <input
                type="text"
                placeholder="Enter Address"
                id="address"
                name="address"
               onChange={getData}
            /> <br/>
            <input
                type="submit"
                value="Add User"
            /> <br/>
            <input
                type="reset"
                value="Reset"
            /> <br/>
        </form>
    </>);
}
export default AddUser; 
