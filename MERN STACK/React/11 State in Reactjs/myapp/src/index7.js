import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppDemo extends React.Component{
  state = {
      count : 0,
      title : "Counting"
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  render(){
      return (<>
      <h2>{this.state.title} : {this.state.count}</h2>
      <button onClick={this.increment}>Increment</button>
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
