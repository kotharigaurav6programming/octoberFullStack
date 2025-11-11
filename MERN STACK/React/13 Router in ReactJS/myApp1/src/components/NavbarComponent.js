import { Link } from "react-router";
function NavbarComponent(){
    return (<blockquote>
        <div style={{backgroundColor:"black",padding:"10px"}}>
        <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/about'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/services'>Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/contact'>Contact</Link>
        </div>
    </blockquote>);
}

export default NavbarComponent;