import { Link, Outlet, useLocation } from "react-router-dom";
function ContactComponent(){
    const location = useLocation();
  const isNestedRoute = location.pathname !== "/contact";
    return (<blockquote>
        <div style={{padding:"10px",marginLeft:"220px",marginTop:"-20px",width:"200px"}}>
        <Link style={{padding:"20px",backgroundColor:"black",color:"white",textDecoration:"none"}} to='/contact/contactComponent1'>ContactComponent 1</Link> <br/><br/>
        <Link style={{padding:"20px",backgroundColor:"black",color:"white",textDecoration:"none"}} to='/contact/contactComponent2'>ContactComponent 2</Link>
        </div>
       {isNestedRoute ? (
        <Outlet />
      ) : (
        <>
          <h2>Contact Page</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua..."
          </p>
        </>
      )}
    </blockquote>);
}

export default ContactComponent;