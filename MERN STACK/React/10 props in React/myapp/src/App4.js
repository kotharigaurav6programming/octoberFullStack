import logo from './logo.svg';
import React from 'react';
import './App.css';

function MyFunComponent({name="noname",age=0,address="noAddress",status=true}){
  {
//    console.log(props);
  }
  return(<>
    Hello This is Functional Component
    <h2>Name : {name}</h2>
    <h2>Age : {age}</h2>
    <h2>Address : {address}</h2>
    <h2>Status : {String(status)}</h2>
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
MyClassComponent.defaultProps={
  name : "noname",
  age : 0,
  address : "NoAddress",
  status : false
}
function App() {
  return (<>
    <MyFunComponent name="Andrew Anderson"   address="Floor No. 5, Indore" />
    <MyClassComponent name="Andrew Anderson" age={45} status={true}/>
  </>);
}

export default App;

