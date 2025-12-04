import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
function UpdateForm(){
    const obj = useSelector(state=> state.user);
    console.log("received obj : ",obj.userObj);
    
    const [userObj,setUserObj] = useState(obj.userObj);
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
        navigate("/viewUsers",{
            state:{
                message : "User Updated Successfully"
            }
        });
        event.target.reset();
    }
    return (<>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                id="username"
                name="username"
                value={userObj.username}
                onChange={getData}
            /> <br/>
            <input
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                value={userObj.email}
                onChange={getData}
            /> <br/>
            <input
                type="text"
                placeholder="Enter Password"
                id="password"
                name="password"
                value={userObj.password}
               onChange={getData}
            /> <br/>
            <input
                type="text"
                placeholder="Enter Address"
                id="address"
                name="address"
                value={userObj.address}
               onChange={getData}
            /> <br/>
            <input
                type="submit"
                value="Update User"
            /> <br/>
            <input
                type="reset"
                value="Reset"
            /> <br/>
        </form>
    </>);
}
export default UpdateForm; 
