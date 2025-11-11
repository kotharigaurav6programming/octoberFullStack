import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
// import { MemoryRouter as Router, Route, Routes } from 'react-router';
// import { HashRouter as Router, Route, Routes } from 'react-router';

import NavbarComponent from './components/NavbarComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import HomeComponent from './components/HomeComponent.js';
import ContactComponent from './components/ContactComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent1 from './components/ContactComponent1.js';
import ContactComponent2 from './components/ContactComponent2.js';

function MyComponent() {
    return (<>
        <Router>
            <HeaderComponent />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/services" element={<ServicesComponent />} />
                <Route path="/contact" element={<ContactComponent />}>
                    <Route path='contactComponent1' element={<ContactComponent1/>}/>
                    <Route path='contactComponent2' element={<ContactComponent2/>}/>
                </Route>
            </Routes>
        </Router>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent />);