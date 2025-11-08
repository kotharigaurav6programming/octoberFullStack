import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [data,setData] = useState([]);
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
            .then(arr => {setData(arr)})
                .catch((error)=>{
                    console.log("Error : "+error);
                });
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