import React from 'react';
import {createRoot} from "react-dom/client";
import Header from './components/HeaderComponent/Header.js';
import Navbar from './components/NavbarComponent/Navbar.js';
import Banner from './components/BannerComponent/Banner.js';

function MyComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);