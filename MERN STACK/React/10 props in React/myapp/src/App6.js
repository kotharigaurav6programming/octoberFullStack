import logo from './logo.svg';
import React from 'react';
import './App.css';

function MyFunComponent(props){
  return(<>
    Hello This is Functional Component
    <table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price</th>
      </tr>
      {
        props.obj.map((obj,index)=>{
          return (<tr>
                <td>{index+1}</td>
                <td>{obj.bookName}</td>
                <td>{obj.authorName}</td>
                <td>{obj.price}</td>
          </tr>)
        })
      }
    </table>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    return (<>
      Hello This is Class Component
<table border={1} cellSpacing={0} cellPadding={5}>
      <tr>
        <th>S.No</th>
        <th>BookName</th>
        <th>AuthorName</th>
        <th>Price</th>
      </tr>
      {
        this.props.obj.map((obj,index)=>{
          return (<tr>
                <td>{index+1}</td>
                <td>{obj.bookName}</td>
                <td>{obj.authorName}</td>
                <td>{obj.price}</td>
          </tr>)
        })
      }
    </table>    </>);
  }
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
    <MyClassComponent obj = {bookDetails}/>
  </>);
}

export default App;

