import { connect, useSelector } from 'react-redux';
import '../style.css';
function Header(){
    const userObj = useSelector(state=> state.user);
    return (<div id="header">
        <center>
            <h2>{userObj.counterTitle} : {userObj.count}</h2>
            <h3>{userObj.tagLine}</h3>
        </center>
    </div>);
}
export default Header;