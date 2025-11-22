import { connect } from 'react-redux';
import '../style.css';
import { reset } from '../actions/counterAction.js';
function LeftSection(props){
    const {counterObj,reset} = props;
    return (<div id='leftSection'>
        <h2>{counterObj.counterTitle} : {counterObj.count}</h2>
        <button onClick={reset}>Reset</button>
    </div>);
}

const mapStateToProp = (state)=>{
    return {
        counterObj : state.counter
    }
}
const mapDispatchToProp = {
    reset
}
export default connect(mapStateToProp,mapDispatchToProp)(LeftSection);