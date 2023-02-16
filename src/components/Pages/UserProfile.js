import { UserContext} from '../User/ReferenceDataContext';
import { useContext } from "react";
import "../stylesheets/UserProfile.css";


const UserProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    console.log(loggedInUser);
    // const userToDoList = loggedInUser.map((userToDoList) => {
    //     return userToDoList.toDoList.map((eachToDo) =>{
    //         return console.log(eachToDo);
    //     })
    // })
    // console.log(UserContext);
   

    const userToDoList = Object.values(loggedInUser).map((toDoList) => {
        return console.log(toDoList);
    })

    const userToDoList2 = Object.values(userToDoList).map((toDoList) => {
        return console.log(toDoList);
    })

    
    return ( 
        <div className='UserProfileContainer'>
            {/* <h1 className="welcome-user">Welcome {loggedInUser.name}</h1> */}
            <h1 className='UserHeading'>Welcome {loggedInUser.name}!</h1>
            {/* <p>{loggedInUser.userToDoList2}</p> */}

            <h2 className='toDosHeading'> Here are your list of to-dos:</h2>
            {/* <ul> {toDoList} </ul> */}
        </div> 
    );
}
 
export default UserProfile;