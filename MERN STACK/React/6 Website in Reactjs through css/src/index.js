import React from 'react';
import {createRoot} from "react-dom/client";
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';

function MyComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);