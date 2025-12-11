import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import {useSelector} from 'react-redux';
import '../style.css';
import { Link } from 'react-router-dom';

function Navbar(){
    const [navBar,setNavBar] = useState();
    const navObj = useSelector(state=> state.common);
    useEffect(()=>{
        let timer = setInterval(()=>{
            if(navObj.navShow=="home"){
                setNavBar(<div id="section">
                    <Link id="navOp" to="/">Home</Link>
                    <Link id="navOp" to="/donorLogin">Donor</Link>
                    <Link id="navOp" to="/ngoLogin">NGO</Link>
                    <Link id="navOp" to="/">About</Link>
                    <Link id="navOp" to="/">Contact</Link>
                </div>);
            }
        },500);
        return ()=> clearInterval(timer);
    });
    return (<div id="nav">
        {navBar}
    </div>);
}

export default Navbar;