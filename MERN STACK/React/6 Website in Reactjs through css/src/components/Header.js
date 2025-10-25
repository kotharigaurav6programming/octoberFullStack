import React from 'react';
import '../css/style.css';
import logo from '../images/logo1.jpg';
function Header(){
    return ( <div id="header">
            <img src={logo} id="logo" alt=""/>
            <span id="heading">FashionFit Collection</span>
        </div>);
}
export default Header;