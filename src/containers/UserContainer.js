import User from "../components/User/User";
import UserList from "../components/User/UserList";

const UserContainer = ({users}) => {
    
    return (  
        <>
        <p>Hello from UserContainer</p>
        <UserList users={users}/>

        </>
    );
}
 
export default UserContainer;