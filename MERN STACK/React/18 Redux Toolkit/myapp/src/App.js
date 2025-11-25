import logo from './logo.svg';
import './App.css';
import './style.css';
import Footer from './pages/Footer.js';
import Header from './pages/Header.js';
import LeftSection from './pages/LeftSection.js';
import RightSection from './pages/RightSection.js';
function App() {
  return(<div>
      <Header/>  
      <div id="box">
          <LeftSection/>
          <RightSection/>
      </div>
      <Footer/>  
  </div>);
}

export default App;
