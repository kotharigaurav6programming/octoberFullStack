import { useSelector } from "react-redux";

function ViewUsers(){
    const userObj = useSelector(state=> state.user);
    console.log(userObj);
    
    return (<>
        <table border="1" cellSpacing={0} cellPadding={8}>
            <caption><h2>User List</h2></caption>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th colspan={2}>Action</th>
            </tr>
            {
                userObj.userArray.map((obj,index)=>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                        <td>{obj.address}</td>
                    </tr>);
                })
            }
        </table>
    </>);
}
export default ViewUsers;