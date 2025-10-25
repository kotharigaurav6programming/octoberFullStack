import React from 'react';
import {createRoot} from "react-dom/client";

// function MyComponent(){
//     return(<div style={{backgroundColor:"#234567",color:"#ffffff"}}>
//         This is an example of Css in React Js
//     </div>)
// }

// function MyComponent(){
//     const myStyle = {
//         backgroundColor:"crimson",
//         color:"#ffffff"
//     }
//     return(<div style={myStyle}>
//         This is an example of Css in React Js
//     </div>)
// }

// function MyComponent(){
//     const myStyle = {
//         myStyle1 : {
//             backgroundColor:"crimson",
//         },
//         myStyle2:{
//             color:"#ffffff"
//         }
//     }
//     return(<div style={myStyle.myStyle1}>
//         <span style={myStyle.myStyle2}>This is an example of Css in React Js</span>
//     </div>)
// }

import './style.css';
function MyComponent(){
    return(<div id="demo1" className="demo2">
        This is an example of Css in React Js
    </div>)
}

createRoot(document.getElementById("root")).render(<MyComponent/>);