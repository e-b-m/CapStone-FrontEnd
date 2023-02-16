import { UserContext} from '../components/User/ReferenceDataContext';
import { useContext } from "react";

const UserProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    console.log(loggedInUser);
    // const userToDoList = loggedInUser.map((userToDoList) => {
    //     return userToDoList.toDoList.map((eachToDo) =>{
    //         return console.log(eachToDo);
    //     })
    // })
    console.log(UserContext);
   

    const userToDoList = Object.values(loggedInUser).map((toDoList) => {
        return console.log(toDoList);
    })

    return ( 
        <>
            {/* <h1 className="welcome-user">Welcome {loggedInUser.name}</h1> */}
            <h1>Welcome {loggedInUser.name}!</h1>

            <h2> Here are your list of to-dos:</h2>
            {/* <ul> {toDoList} </ul> */}
        </> 
    );
}
 
export default UserProfile;