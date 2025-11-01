import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppDemo extends React.Component{
  state={
    name : this.props.name
  }
  render(){
      return (<>
        <h2>Name : {this.state.name}</h2>
      </>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppDemo name="Jackson Jack"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
