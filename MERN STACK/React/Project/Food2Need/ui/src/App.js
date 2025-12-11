import logo from './logo.svg';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header.js';
function App() {
  return (<div id="container">
    <Header/>
    <Router>
        <Routes>
          <Route/>
        </Routes>
    </Router>
  </div>);
}

export default App;
