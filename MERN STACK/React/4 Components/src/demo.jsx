import React from "react";

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

export {Header, Services}; 
export default About;