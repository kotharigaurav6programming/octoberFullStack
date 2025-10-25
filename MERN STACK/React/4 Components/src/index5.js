
import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header.js";
import Services from "./components/Services.js";
import About from "./components/About.js";

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