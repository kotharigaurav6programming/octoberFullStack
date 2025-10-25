
import React from "react";
import {createRoot} from "react-dom/client";

// class component

class Header extends React.Component{
    render(){
        return (<>
            <h1>Header Section</h1>
            <p>This is Header Section</p>
        </>);
    }
}

class Services extends React.Component{
    render(){
        return (<>
            <h1>Services Section</h1>
            <p>This is Services Section</p>
        </>);
    }
}

class About extends React.Component{
    render(){
        return (<>
            <h1>About Section</h1>
            <p>This is About Section</p>
        </>);
    }
}

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