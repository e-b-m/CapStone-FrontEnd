import User from "../components/User/User";
import UserList from "../components/User/UserList";


const  SERVER_URL = "http://localhost:8080/"


const UserContainer = ({users}) => {

    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch(`${SERVER_URL}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message))
    },  []);
    
    return (  
        <>
        <p>Hello from UserContainer</p>
        <UserList users={users}/>

        </>
    );
}
 
export default UserContainer;