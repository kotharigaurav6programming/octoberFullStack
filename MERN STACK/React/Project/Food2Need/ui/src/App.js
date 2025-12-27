import logo from './logo.svg';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header.js';
import Navbar from './component/Navbar.js';
import Home from './component/Home.js';
import LoginDonor from './component/LoginDonor.js';
import LoginNGO from './component/LoginNGO.js';
import LoginAdmin from './component/LoginAdmin.js';
import RegistrationDonor from './component/RegistrationDonor.js';
import RegistrationNGO from './component/RegistrationNGO.js';
import DonorHome from './component/DonorHome.js';
import DonorAddFood from './component/DonorAddFood.js';
import AdminHome from './component/AdminHome.js';
import AdminNGOList from './component/AdminNGOList.js';

function App() {
  return (<div id="container">
    <Header/>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/adminLogin" element={<LoginAdmin/>}/>
          <Route path="/donorLogin" element={<LoginDonor/>}/>
          <Route path="/ngoLogin" element={<LoginNGO/>}/>
          <Route path="/donorRegistration" element={<RegistrationDonor/>}/>
          <Route path="/ngoRegistration" element={<RegistrationNGO/>}/>
          <Route path="/donorHome" element={<DonorHome/>}/>
          <Route path="/donorAddFood" element={<DonorAddFood/>}/>
          <Route path="/adminHome" element={<AdminHome/>}/>
          <Route path="/adminNGOList" element={<AdminNGOList/>}/>
          

        </Routes>
    </Router>
  </div>);
}

export default App;
