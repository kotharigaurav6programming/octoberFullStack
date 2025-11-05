import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
function MyComponent(){
    const [userObj,setUserObj] = useState({});
    const [userArray,setUserArray] = useState([]);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name] : value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserArray([
            ...userArray,
            userObj
        ]);
        event.target.reset();
    }
    return (<div>
        <div id="leftSection">
            <br/><h2>Fill Details</h2> <br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value="Add Details"
                /> <br/>
                <input
                    type="reset"
                    value="Reset Details"
                /> <br/>
            </form>
        </div>
        <div id="rightSection">
            <br/><h2>Student Details</h2> <br/>
            
            {userArray.length==0 ? <div id="msg">No Record Found</div> : (<table border={1} cellPadding={8} cellSpacing={0} width="80%">
                <tr bgcolor="#234567">
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
                {
                    userArray.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td>{obj.address}</td>
                        </tr>);
                    })
                }
            </table>)}
        </div>
    </div>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);