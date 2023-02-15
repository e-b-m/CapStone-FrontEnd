import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from './User/LogIn';
import { UserContext} from './User/ReferenceDataContext';

const NavBar = () => {
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