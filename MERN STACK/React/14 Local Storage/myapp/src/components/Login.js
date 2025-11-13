import { useState } from 'react';
import '../style.css';
import { useLocation, useNavigate } from 'react-router-dom';
function Login(){
    const [userObj,setUserObj] = useState({});
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
                var data = JSON.parse(localStorage.getItem("data"));
                var res = data.find((obj)=> obj.email==userObj.email && obj.password==userObj.password);
                // console.log(res);
                if(res){
                    navigate("/profile",{
                        state:{
                            message:"Login Successfull",
                            email : userObj.email 
                        }
                    });
                }else{
                    navigate("/login",{
                        state:{
                            message:"Email Id or Password is wrong"
                        }
                    });
                }
            event.target.reset();
        }
    return(<blockquote>
        <h2>Login Form</h2>
        {location.state?.message}
        <form onSubmit={handleSubmit}>
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
            type="submit"
            value="Login"
        /><br/>
        <input
            type="reset"
            value="Reset"
        /><br/>
        </form>
    </blockquote>);
}
export default Login;