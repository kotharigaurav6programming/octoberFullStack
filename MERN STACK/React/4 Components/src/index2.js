import React from "react";
import {createRoot} from "react-dom/client";

// class component
// class MyComponent extends React.Component{
//     render(){
//         return "Hello User, This is my First class component";
//     }
// }

// class MyComponent extends React.Component{
//     render(){
//         return (<div>
//             <h1>Hello User, This is my First class component</h1>
//             <h2>Hello User, This is my First class component</h2>
//             <h3>Hello User, This is my First class component</h3>
//         </div>);
//     }
// }

// class MyComponent extends React.Component{
//     render(){
//         return (<React.Fragment>
//             <h1>Hello User, This is my First class component</h1>
//             <h2>Hello User, This is my First class component</h2>
//             <h3>Hello User, This is my First class component</h3>
//         </React.Fragment>);
//     }
// }

class MyComponent extends React.Component{
    render(){
        return (<>
            <h1>Hello User, This is my First class component</h1>
            <h2>Hello User, This is my First class component</h2>
            <h3>Hello User, This is my First class component</h3>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);