import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CareeProfile from './Caree/CareeProfile';
import Caree from './Caree/Caree';
import { UserContext} from './User/ReferenceDataContext';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const signOut = () => {
        setLoggedInUser(null);
    }

    return ( 
        <>
        <p> Logged in user nav bar </p>
        <img/>

        {/* <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button> */}
        {loggedInUser ? <>

        <button className="navbtn"><Link to="/UserProfile"> User Profile </Link></button>
        <button className="navbtn"><Link to="/CareeProfile"> Caree Profile </Link></button> 
        <button className="navbtn"><Link to="/BubblePage"> Bubble Page </Link></button> 
        <button className='navbtn' onClick={signOut}>Sign Out</button>
        </> : <>

        <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button>
        <button className="login-btn"><Link to="/LogIn"> Login </Link></button>
        {/* <LogIn setLoggedInUser={setLoggedInUser}/> */}
        </> }
    
        </> 
    );
}
 
export default NavBar;