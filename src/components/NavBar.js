import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from './User/LogIn';
import { UserContext, UserContextProvider } from './User/ReferenceDataContext';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // const logged = (loggedInUser) => {
    //     return (
    //     loggedInUser ? null 
    //     : <><LogIn setLoggedInUser={setLoggedInUser}/>
    //     <button className="userprofile-btn"><Link to="/UserProfile"> User Profile </Link></button>
    //     </>)
    // } 
    

    return ( 
        <>
        <p> nav bar </p>
        <img/>
        {/* <LogIn setLoggedInUser={setLoggedInUser}/> */}

        {loggedInUser ? null : <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button>}
        {loggedInUser ? null : <><button className='login-btn'> <Link to ="/LogIn"> Login </Link></button></>}
        {loggedInUser ? <button className="userprofile-btn"><Link to="/UserProfile"> User Profile </Link></button> : null}
        {loggedInUser ? <button className="careeprofile-btn"><Link to="/CareeProfile"> Caree Profile </Link></button> : null}
        {loggedInUser ? <button className="bubblepage-btn"><Link to="/BubblePage"> Bubble Page </Link></button> : null}
        
        </> 
    );
}
 
export default NavBar;