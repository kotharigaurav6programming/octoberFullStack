import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    const userObj = useSelector(state=> state.user); 
    useEffect(()=>{
        var timer = setInterval(()=>{
            if(userObj.navShow=="home"){
                setMenuItem(<>
                    <Link style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"30px"}} to="/">Home</Link>       
                    <Link style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"30px"}} to="/addUser">Add Users</Link>       
                    <Link style={{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:"30px"}} to="/viewUsers">View Users</Link>       
                </>);
            }
        },10);
        return ()=> clearInterval(timer);
    },[]);
    return (<div style={{backgroundColor : "black",color:"white",padding:"10px"}}>
        {menuItem}
    </div>);
}
export default Navbar;