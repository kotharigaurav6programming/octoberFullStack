import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function MyComponent(){
    return(<div className="container" style={{backgroundColor:"dodgerblue",color:"white"}}>
            <h1>Welcome to bootstrap</h1>
            <p>This is an example of bootstrap. This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.This is an example of bootstrap.</p>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);