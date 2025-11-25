import { useState } from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, setTag } from '../store/userSlice.js';
function RightSection(){
    const userObj = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const [tagline,setTagLine] = useState();
    return (<div id='rightSection'>
        <h2>{userObj.counterTitle} : {userObj.count}</h2> <br/>
        <button onClick={()=>{ dispatch(increment()) }}>Increment</button> 
        <button onClick={()=>{ dispatch(decrement()) }}>Decrement</button> 
        <button onClick={()=>{ dispatch(reset()) }}>Reset</button> 
        <br/>
        <input placeholder='Enter TagLine' type="text" value={tagline ?? ""} onChange={(event)=>{
            setTagLine(event.target.value);
        }}/>
        <button onClick={()=>{
            dispatch(setTag(tagline))
            setTagLine(null);
        }}>Set Tag Line</button>
    </div>);
}

export default RightSection;