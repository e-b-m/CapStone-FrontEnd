import { UserContext} from '../User/ReferenceDataContext';
import { useContext } from "react";
import Need from '../Need/Need';
 
const UserProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const userToDoList = loggedInUser.toDoList.map((toDo) => {
        return <Need need={toDo} key={toDo.id}/>
    })

    return ( 
        <>
            <h1>Welcome {loggedInUser.name}!</h1>
            <h2> Here are your list of to-dos:</h2>
            {userToDoList}
        </> 
    );
}
 
export default UserProfile;