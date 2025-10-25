
import React from "react";
import {createRoot} from "react-dom/client";
import About, { Header, Services } from "./demo1.jsx";

// class component
class MyComponent extends React.Component{
    render(){
        return (<>
            <Header/>
            <Services/>
            <About/>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);