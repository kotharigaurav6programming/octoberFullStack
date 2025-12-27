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
            }else if(navObj.navShow=="donor"){
                setNavBar(<div id="section">
                    <Link id="navOp" to="/">Home</Link>
                    <Link id="navOp" to="/donorAddFood">AddFood</Link>
                    <Link id="navOp" to="/">ViewRequest</Link>
                    <Link id="navOp" to="/">DonationHistory</Link>
                    <Link id="navOp" to="/">Blog</Link>
                    <Link id="navOp" to="/">Profile</Link>
                    <Link id="navOp" to="/">Logout</Link>
                </div>);
            }else if(navObj.navShow=="admin"){
                setNavBar(<div id="section">
                    <Link id="navOp" to="/">Home</Link>
                    <Link id="navOp" to="/adminNGOList">NGOList</Link>
                    <Link id="navOp" to="/">SurplusFood</Link>
                    <Link id="navOp" to="/">ActiveNGO</Link>
                    <Link id="navOp" to="/">Blog</Link>
                    <Link id="navOp" to="/">Profile</Link>
                    <Link id="navOp" to="/">Logout</Link>
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