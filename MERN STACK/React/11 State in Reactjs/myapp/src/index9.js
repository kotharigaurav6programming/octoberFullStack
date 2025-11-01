import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppDemo extends React.Component{
  constructor(){
    super();
    this.state = {
        count : 0,
        title : "Counting"
    }
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  decrement(){
    this.setState({count:this.state.count-1});
  }
  reset=()=>{
    this.setState({count:0});
  }
  incrementByThree=()=>{
    this.setState({count:this.state.count+3});
  }
  
  render(){
      return (<>
      <h2>{this.state.title} : {this.state.count}</h2>
      <button onClick={this.increment}>Increment</button>
      <button onClick={()=>{this.decrement()}}>Decrement</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.incrementByThree}>IncrementByThree</button>
      <button onClick={()=>{
        this.setState({title:"Count"});
      }}>ChangeTitle</button>
      </>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppDemo/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
