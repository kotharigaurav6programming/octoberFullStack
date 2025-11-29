import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import AddUser from './components/AddUser.js';
import ViewUsers from './components/ViewUsers.js';

function App() {
  return (<blockquote>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/viewUsers" element={<ViewUsers/>}/>
      </Routes>
    </Router>
  </blockquote>);
}

export default App;
