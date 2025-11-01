import logo from './logo.svg';
import React from 'react';
import './App.css';

function MyFunComponent(props){
  {
    console.log(props);
  }
  return(<>
    Hello This is Functional Component
    <h2>{props.name}</h2>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    {
      console.log(this);
    }
    return (<>
      Hello This is Class Component
      <h2>{this.props.name}</h2>  
    </>);
  }
}
function App() {
  return (<>
    <MyFunComponent name="Andrew Anderson"/>
    <MyClassComponent name="Andrew Anderson"/>
  </>);
}

export default App;

