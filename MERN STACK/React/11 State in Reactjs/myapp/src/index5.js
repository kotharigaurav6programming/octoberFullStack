import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppDemo extends React.Component{
  constructor(props){
    super(props);
    // console.log("constructor called");
    this.state = {
      name : this.props.name
    }
  }
  increment=()=>{
    this.setState({name:"Mathew Math"});
  }
  render(){
      return (<>
      <h2>Name : {this.state.name}</h2>
      
      {/* <button onClick={()=>{
        this.setState({name:"Mathew Math"});
      }}>Change Name</button> */}

      <button onClick={this.increment}>Change Name</button>


      </>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppDemo name="Jack Jackson"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
