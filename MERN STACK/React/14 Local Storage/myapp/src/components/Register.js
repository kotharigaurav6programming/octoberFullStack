import { useState } from 'react';
import '../style.css';
import { useLocation, useNavigate } from 'react-router-dom';
function Register(){
    localStorage.setItem("navShow","register");
    const [userObj,setUserObj] = useState({});
    const navigate = useNavigate();
    // console.log(navigate);
    
    const location = useLocation();
    // console.log(location);
    
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            var data = JSON.parse(localStorage.getItem("data"));
            if(!data){
                localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
                navigate("/register",{
                    state:{
                        message : "User Added Successfully"
                    }
                });
            }else{
                var check = data.find((obj)=> obj.email==userObj.email);
                if(check){
                    navigate("/register",{
                        state:{
                            message : "Email Id Already Exist"
                        }
                    }); 
                }else{
                    localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
                    navigate("/register",{
                        state:{
                            message : "User Added Successfully"
                        }
                    }); 
                }
            }
        event.target.reset();
    }
    return(<blockquote>
        <h2>Register Form</h2>
        {location.state?.message}
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            required
            onChange={getData}
        /><br/>
        <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            onChange={getData}
        /><br/>
        <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
            onChange={getData}
        /><br/>
        <input
            type="text"
            placeholder="Enter Address"
            name="address"
            id="address"
            required
            onChange={getData}
        /><br/>
        <input
            type="submit"
            value="Register"
        /><br/>
        <input
            type="reset"
            value="Reset"
        /><br/>
    </form>
    </blockquote>);
}
export default Register;