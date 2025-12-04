import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../store/userSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
function ViewUsers(){
    const userObj = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(userObj);
    
    return (<>
     {location.state?.message ? location.state.message : ""}
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
                        <td><button onClick={()=>{
                            dispatch(updateUser({obj,index}));
                            navigate("/updateForm");
                        }}>Update</button></td>
                        <td><button onClick={()=>{
                            dispatch(deleteUser(index));   
                        }}>Delete</button></td>
                    </tr>);
                })
            }
        </table>
    </>);
}
export default ViewUsers;