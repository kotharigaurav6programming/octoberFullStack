import { useState } from 'react';
import { decrementFun, incrementFun, reset } from '../actions/counterAction.js';
import { setTagLine } from '../actions/TagAction.js';
import '../style.css';
import { connect } from 'react-redux';
function RightSection(props){
    const [tagLine,setTag_Line] = useState();
    const {incrementFun,decrementFun,reset,setTagLine,counterObj} = props;
    return (<div id='rightSection'>
        <h2>{counterObj.counterTitle} : {counterObj.count}</h2> <br/>
        <button onClick={incrementFun}>Increment</button> 
        <button onClick={decrementFun}>Decrement</button> 
        <button onClick={reset}>Reset</button> 
        <br/>
        <input placeholder='Enter TagLine' type="text" value={tagLine ?? ""} onChange={(event)=>{
            setTag_Line(event.target.value);
        }}/>
        <button onClick={()=>{
            setTagLine(tagLine);
            setTag_Line(null);
        }}>Set Tag Line</button>
    </div>);
}

const mapStateToProp = (state)=>{
    return {
        counterObj : state.counter
    }
}
const mapDispatchToProp = {
    incrementFun,
    decrementFun,
    reset,
    setTagLine
}
export default connect(mapStateToProp,mapDispatchToProp)(RightSection);