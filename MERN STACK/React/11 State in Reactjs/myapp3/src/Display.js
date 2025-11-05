function Display(props){
    return (<>
    <br/><h2>Student Details</h2> <br/>
            
            {props.userData.length==0 ? <div id="msg">No Record Found</div> : (<table border={1} cellPadding={8} cellSpacing={0} width="100%">
                <tr bgcolor="#234567">
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th colspan={2}>Action</th>
                </tr>
                {
                    props.userData.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td>{obj.address}</td>
                            <td><button id="up" onClick={()=>{props.userUpdate({obj,index})}}>Update</button></td>
                            <td><button id="down" onClick={()=>{props.userDelete(index)}}>Delete</button></td>
                        </tr>);
                    })
                }
            </table>)}
    </>);
}
export default Display;