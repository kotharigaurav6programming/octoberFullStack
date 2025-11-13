import { useLocation } from "react-router-dom";

function Profile(){
    const location = useLocation();
    return(<>
        <h2>Welcome {location.state.email}</h2>
    </>);
}
export default Profile;