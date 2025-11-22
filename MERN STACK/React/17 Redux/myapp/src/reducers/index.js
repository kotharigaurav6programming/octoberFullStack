import { combineReducers } from "redux";
import counter from './counter.js';
import head from './head.js';
export default combineReducers({
    counter,
    head
});