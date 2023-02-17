import LogIn from "./LogIn";

const User = ({user}) => {

    return ( 
        <>
            <h1>{user.name}</h1>
            <h1>{user.emailAddress}</h1>
            <h1>{user.location}</h1>
            <h1>toDoList:{user.toDoList}</h1>
        </>
     );
}
 
export default User;