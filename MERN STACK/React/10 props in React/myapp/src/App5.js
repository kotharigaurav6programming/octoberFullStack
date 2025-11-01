import logo from './logo.svg';
import React from 'react';
import './App.css';

function MyFunComponent(props){
  {
    console.log(props);
  }
  return(<>
    Hello This is Functional Component
    <h2>Name : {props.obj.name}</h2>
    <h2>Age : {props.obj.age}</h2>
    <h2>Address : {props.obj.address}</h2>
    <h2>Status : {String(props.obj.status)}</h2>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    {
      console.log(this);
    }
    return (<>
      Hello This is Class Component
    <h2>Name : {this.props.obj.name}</h2>
    <h2>Age : {this.props.obj.age}</h2>
    <h2>Address : {this.props.obj.address}</h2>
    <h2>Status : {String(this.props.obj.status)}</h2>
    </>);
  }
}
function App() {
  const myData = {
      name:"Andrew Anderson",
      age:45,
      address:"Floor No. 5, Indore",
      status:true
  } 
  return (<>
    <MyFunComponent obj = {{name:"Andrew Anderson",age:45,address:"Floor No. 5, Indore",status:true}}/>
    <MyClassComponent obj = {myData}/>
  </>);
}

export default App;

