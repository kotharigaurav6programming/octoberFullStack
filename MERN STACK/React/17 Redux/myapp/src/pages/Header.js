import { connect } from 'react-redux';
import '../style.css';
function Header(props){
    const {counterObj,tagline} = props
    return (<div id="header">
        <center>
            <h2>{counterObj.counterTitle} : {counterObj.count}</h2>
            <h3>{tagline}</h3>
        </center>
    </div>);
}
const mapStateToProp = (state)=>{
    return {
        counterObj : state.counter,
        tagline : state.head.tagline
    }
}
export default connect(mapStateToProp)(Header);