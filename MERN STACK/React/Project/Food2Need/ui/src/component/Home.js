import React, { useEffect } from 'react';
import {createRoot} from 'react-dom/client';
import banner from '../images/banner.jpg';
import { useDispatch } from 'react-redux';
import { resetMessage } from '../store/donorSlice.js';
function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetMessage(''));
    });
    return (<div>
        <div id="home">
            <img src={banner} id="bannerId" alt="Banner"/>
        </div>
        <div id="homeBottom">
            <h2>Welcome to Food2Need</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>);
}

export default Home;