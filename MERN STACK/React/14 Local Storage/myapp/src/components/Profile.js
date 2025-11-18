import { useLocation } from "react-router-dom";

function Profile(){
    localStorage.setItem("navShow","profile");
    const location = useLocation();
    return(<>
        <h2>Welcome {location.state.email}</h2>
    </>);
}
export default Profile;