import User from "./User";

const UserList = ({users}) => {
    
    const userComponents = users.map((user) => {
        return <User key={user.id} user={user}/>      
    }
    )
  

    return ( 
        <>
        
        {userComponents}
        </> 
     );
}
 
export default UserList;