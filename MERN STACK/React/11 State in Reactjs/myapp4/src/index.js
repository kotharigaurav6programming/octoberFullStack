import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Display from './Display.js';
class MyComponent extends React.Component{
    state = {
        userObj : {},
        userArray : [],
        index : -1
    }
    getData = (event)=>{
        const {name,value} = event.target;
        this.setState({
            userObj : {
                ...this.state.userObj, 
                [name]:value
            }
        });
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.index==-1){
            this.setState({
                userArray:[...this.state.userArray,this.state.userObj]
            });
        }else{
            this.state.userArray.splice(this.state.index,1,this.state.userObj);
            this.setState({
                userArray : [...this.state.userArray]
            });
            this.setState({
                index : -1
            });
        }
        event.target.reset();
        this.setState({
            userObj : {
                username:"",
                email:"",
                password:"",
                address:""    
            }
        });
    }
    updateData = (userObject)=>{
        this.setState({
            userObj : userObject.obj
        });
        this.setState({
            index : userObject.index
        });
    }
    deleteData = (index)=>{
        this.state.userArray.splice(index,1);
        this.setState({
            userArray : [...this.state.userArray]
        });
    }

    render(){
        return (<div>
            <div id="leftSection">
                <br/><h2>Fill Details</h2> <br/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter Username'
                        name="username"
                        id="username"
                        required
                        value={this.state.userObj.username}
                        onChange={this.getData}
                    /> <br/>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        name="email"
                        id="email"
                        required
                        value={this.state.userObj.email}
                        onChange={this.getData}
                    /> <br/>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name="password"
                        id="password"
                        value={this.state.userObj.password}
                        required
                        onChange={this.getData}
                    /> <br/>
                    <input
                        type="text"
                        placeholder='Enter Address'
                        name="address"
                        id="address"
                        value={this.state.userObj.address}
                        required
                        onChange={this.getData}
                    /> <br/>
                    <input
                        type="submit"
                        value={this.state.index==-1 ? "Add Details" : "Update Details"}
                    /> <br/>
                    <input
                        type="reset"
                        value="Reset Details"
                    /> <br/>
                </form>
            </div>
            <div id="rightSection">
                <Display userData={this.state.userArray} userUpdate={this.updateData} userDelete={this.deleteData}/>
            </div>
        </div>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);