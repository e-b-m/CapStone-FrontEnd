import User from "../components/User/User";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserList from "../components/User/UserList";



const  SERVER_URL = "http://localhost:8080/"


const UserContainer = () => {

    const [error, setError] = useState("");
    const [usersById ,setUsersById] = useState({});
    let {id} = useParams();
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch(`${SERVER_URL}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message))
    },  []);

    useEffect (() => {
        fetch(`${SERVER_URL}users/` + id)
        .then((response)=> response.json())
        .then((data) => setUsersById(data))
    }, [])

    

    return (  
        <>
        <p>Hello from UserContainer</p>
        <UserList users={users}/>
        
        </>
    );
}
 
export default UserContainer;