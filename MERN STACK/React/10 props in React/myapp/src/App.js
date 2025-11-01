import logo from './logo.svg';
import React from 'react';
import MyClassComponent from  './MyComponent.js';
import './App.css';

function MyFunComponent(props){
  return(<>
    <MyClassComponent data={props.obj}/>
  </>);
}

var bookDetails = [{
  bookName : "C Programming",
  authorName : "Dennis Ritchie",
  price : 567.78
},{
  bookName : "C++ Programming",
  authorName : "Dennis Richards",
  price : 222.78
},{
  bookName : "C# Programming",
  authorName : "Andrew Anderson",
  price : 56
},{
  bookName : "Java Programming",
  authorName : "James Gosling",
  price : 57.78
}];

function App() {
  return (<>
    <MyFunComponent obj = {bookDetails}/>
  </>);
}

export default App;

