import { UserContext} from '../User/ReferenceDataContext';
import { useContext } from "react";
import Need from '../Need/Need';


const UserProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const userToDoList = loggedInUser.toDoList.map((toDo) => {
        return <Need need={toDo} key={toDo.id}/>
    })

    return ( 
        <div className='UserProfileContainer'>
            <h1 className='UserHeading' >Welcome {loggedInUser.name}!</h1>
            
            <h2 className='toDosHeading'> Here are your list of to-dos:</h2>
            {userToDoList}
        </div> 
    );
}
 
export default UserProfile;