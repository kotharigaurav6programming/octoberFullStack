import React from "react";
import {createRoot} from "react-dom/client";

// functional component
// function MyComponent(){
//     return "Hello User, This is my First Functional component";
// }

// function MyComponent(){
//     return (<div>
//         <h1>Hello User, This is my First Functional component</h1>
//         <h2>Hello User, This is my First Functional component</h2>
//         <h3>Hello User, This is my First Functional component</h3>
//     </div>);
// }

// function MyComponent(){
//     return (<React.Fragment>
//         <h1>Hello User, This is my First Functional component</h1>
//         <h2>Hello User, This is my First Functional component</h2>
//         <h3>Hello User, This is my First Functional component</h3>
//     </React.Fragment>);
// }

function MyComponent(){
    return (<>
        <h1>Hello User, This is my First Functional component</h1>
        <h2>Hello User, This is my First Functional component</h2>
        <h3>Hello User, This is my First Functional component</h3>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);