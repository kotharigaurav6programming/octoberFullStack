import { Link } from "react-router-dom";
function Navbar(){
    return(<div style={{backgroundColor:"black",padding:"20px"}}>
        <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/register'>Register</Link>
    </div>);
}
export default Navbar;