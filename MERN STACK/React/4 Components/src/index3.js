import React from "react";
import {createRoot} from "react-dom/client";

// functional component

function Header(){
    return (<>
        <h1>Header Section</h1>
        <p>This is Header Section</p>
    </>);
}

function Services(){
    return (<>
        <h1>Services Section</h1>
        <p>This is Services Section</p>
    </>);
}

function About(){
    return (<>
        <h1>About Section</h1>
        <p>This is About Section</p>
    </>);
}

function MyComponent(){
    return (<>
        <Header/>
        <Services/>
        <About/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);
