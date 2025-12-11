import React from 'react';
import {createRoot} from 'react-dom/client';
import logo from '../images/logo.png';
import '../style.css';
function Header(){
    return (<div id="header">
        <h1>
            <img src={logo} alt="logo" id="logo"/>
            <span id="heading">Food2Need</span>
        </h1>
    </div>);
}

export default Header;