function Display(props){
    return (<>
    <br/><h2>Student Details</h2> <br/>
            
            {props.userData.length==0 ? <div id="msg">No Record Found</div> : (<table border={1} cellPadding={8} cellSpacing={0} width="80%">
                <tr bgcolor="#234567">
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
                {
                    props.userData.map((obj,index)=>{
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
    </>);
}
export default Display;