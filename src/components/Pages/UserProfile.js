import { UserContext} from '../User/ReferenceDataContext';
import { useContext } from "react";
<<<<<<< HEAD:src/components/Pages/UserProfile.js
import "../stylesheets/UserProfile.css";

=======
import Need from '../components/Need/Need';
>>>>>>> main:src/Pages/UserProfile.js

const UserProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const userToDoList = loggedInUser.toDoList.map((toDo) => {
        return <Need need={toDo} key={toDo.id}/>
    })

    return ( 
<<<<<<< HEAD:src/components/Pages/UserProfile.js
        <div className='UserProfileContainer'>
            {/* <h1 className="welcome-user">Welcome {loggedInUser.name}</h1> */}
            <h1 className='UserHeading'>Welcome {loggedInUser.name}!</h1>
            {/* <p>{loggedInUser.userToDoList2}</p> */}

            <h2 className='toDosHeading'> Here are your list of to-dos:</h2>
            {/* <ul> {toDoList} </ul> */}
        </div> 
=======
        <>
            <h1>Welcome {loggedInUser.name}!</h1>

            <h2> Here are your list of to-dos:</h2>
            {userToDoList}
        </> 
>>>>>>> main:src/Pages/UserProfile.js
    );
}
 
export default UserProfile;