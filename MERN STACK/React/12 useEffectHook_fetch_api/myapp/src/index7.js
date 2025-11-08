import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [data,setData] = useState([]);
    const getData = async()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const arr = await response.json();
            setData(arr);    
        }catch(error){
            console.log("Error : "+error);
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    return (<>
        <table border={1} cellSpacing = {0} cellPadding={7}>
            <tr>
                <th>S.No</th>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {
                data.map((object,index)=>{
                    return(<tr>
                        <td>{index+1}</td>
                        <td>{object.userId}</td>
                        <td>{object.id}</td>
                        <td>{object.title}</td>
                        <td>{object.body}</td>
                    </tr>);
                })
            }
        </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);

