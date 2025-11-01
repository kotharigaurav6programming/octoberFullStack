import logo from './logo.svg';
import './App.css';

function MyComponent(props){
  {
    console.log(props);
  }
  return(<>
    Hello This is Functional Component
    <h2>{props.name}</h2>
  </>);
}
function App() {
  return (<MyComponent name="Andrew Anderson.."/>);
}

export default App;

