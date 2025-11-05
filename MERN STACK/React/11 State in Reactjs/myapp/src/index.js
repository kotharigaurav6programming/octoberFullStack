import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppDemo extends React.Component{
  state = {
    age : 0,
    username : "",
    obj : {}
  }
  getData = (event)=>{
    const {name,value} = event.target;
    this.state[name] = value;
  }
  handleSubmit = ()=>{
    this.setState({
      obj : {
        age : this.state.age,
        username : this.state.username
      }
    });
  }
  render(){
      return (<>
        <h3>Fill Details</h3>
        <input
          type="text"
          placeholder='Enter Username'
          name='username'
          id='username'
          onChange={this.getData}
        /><br/>
        <input
          type="text"
          placeholder='Enter Age'
          name='age'
          id='age'
          onChange={this.getData}
        /> <br/>
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
        <br/>
       
        <h2>{this.state.obj.username ? `Name : ${this.state.username}`: ""}</h2>
        <h2>{this.state.obj.age ? `Age : ${this.state.age}`: ""}</h2>
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
