import logo from './logo.svg';
import React from 'react';
import './App.css';

function MyFunComponent(props){
  {
    console.log(props);
  }
  return(<>
    Hello This is Functional Component
    <h2>Name : {props.name}</h2>
    <h2>Age : {props.age}</h2>
    <h2>Address : {props.address}</h2>
    <h2>Status : {String(props.status)}</h2>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    {
      console.log(this);
    }
    return (<>
      Hello This is Class Component
    <h2>Name : {this.props.name}</h2>
    <h2>Age : {this.props.age}</h2>
    <h2>Address : {this.props.address}</h2>
    <h2>Status : {String(this.props.status)}</h2>
    </>);
  }
}
function App() {
  return (<>
    <MyFunComponent name="Andrew Anderson"   age={45} address="Floor No. 5, Indore" status={true}/>
    <MyClassComponent name="Andrew Anderson" age={45} address="Floor No. 5, Indore" status={true}/>
  </>);
}

export default App;

