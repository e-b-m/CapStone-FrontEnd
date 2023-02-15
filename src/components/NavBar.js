import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CareeProfile from './Caree/CareeProfile';
import Caree from './Caree/Caree';
import { UserContext} from './User/ReferenceDataContext';

const NavBar = ({caree}) => {
    const [loggedInUser] = useContext(UserContext)
    

    return ( 
        <>
        <p> Logged in user nav bar </p>
        <img/>

        {/* <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button> */}
        {loggedInUser ? <>

        <button className="userprofile-btn"><Link to="/UserProfile"> User Profile </Link></button>
        <button className="careeprofile-btn"><Link to="/CareeProfile"> Caree Profile </Link></button> 
        <button className="bubblepage-btn"><Link to="/BubblePage"> Bubble Page </Link></button> 
        
        </> : <>

        <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button>
        <button className="login-btn"><Link to="/LogIn"> Login </Link></button>
        {/* <LogIn setLoggedInUser={setLoggedInUser}/> */}
        </> }
    
        </> 
    );
}
 
export default NavBar;