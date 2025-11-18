import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        var timer = setInterval(()=>{
            var navShow = localStorage.getItem("navShow");
            if(navShow==="null"){
                setMenuItem(<div>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"white",textDecoration:"none"}} to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"white",textDecoration:"none"}} to='/register'>Register</Link>
                </div>);
            }else if(navShow==="login"){
                setMenuItem(<div>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"white",textDecoration:"none"}} to='/register'>Register</Link>
                </div>);
            }else if(navShow==="register"){
                setMenuItem(<div>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"white",textDecoration:"none"}} to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                </div>);
            }else if(navShow==="profile"){
                setMenuItem(<div>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>Logout</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                </div>);
            }
        },10);
        return ()=> clearInterval(timer);
    },[]);
    return(<div style={{backgroundColor:"black",padding:"20px"}}>
        {menuItem}
    </div>);
}
export default Navbar;

// import { Link } from "react-router-dom";
// function Navbar(){
//     return(<div style={{backgroundColor:"black",padding:"20px"}}>
//         <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//         <Link style={{color:"white",textDecoration:"none"}} to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//         <Link style={{color:"white",textDecoration:"none"}} to='/register'>Register</Link>
//     </div>);
// }
// export default Navbar;