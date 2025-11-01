import React from 'react';
import navbarStyle from './navbarStyle.module.css';
function Navbar(){
    return (<div className={navbarStyle.nav}>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="">Collection</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="">Product &#9662;</a>
                    <ul>
                        <li><a href="">Product 1</a></li>
                        <li><a href="">Product 2</a></li>
                        <li><a href="">Product 3</a></li>
                        <li><a href="">Product 4</a></li>
                        <li><a href="">Product 5</a></li>
                        <li><a href="">Product 6</a></li>
                    </ul>
                </li>
                <li><a href="">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="signin.html">Account</a></li>
            </ul>
         </div>
);
}
export default Navbar;