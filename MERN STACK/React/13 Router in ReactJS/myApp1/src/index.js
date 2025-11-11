import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router';
import NavbarComponent from './components/NavbarComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import HomeComponent from './components/HomeComponent.js';
import ContactComponent from './components/ContactComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import AboutComponent from './components/AboutComponent.js';

function MyComponent(){
    return(<>
        <Router>
            <HeaderComponent/>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                 <Route path="/about" element={<AboutComponent/>}/>
                  <Route path="/services" element={<ServicesComponent/>}/>
                   <Route path="/contact" element={<ContactComponent/>}/>
            </Routes>
        </Router>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);