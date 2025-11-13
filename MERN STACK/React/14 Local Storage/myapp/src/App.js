import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Profile from './components/Profile.js';

function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
