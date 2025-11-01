import React from 'react';
import headerStyle from './headerStyle.module.css';
import logo from '../../images/logo1.jpg';
function Header(){
    return ( <div className={headerStyle.header}>
            <img src={logo} className={headerStyle.logo} alt=""/>
            <span className={headerStyle.heading}>FashionFit Collection</span>
        </div>);
}
export default Header;