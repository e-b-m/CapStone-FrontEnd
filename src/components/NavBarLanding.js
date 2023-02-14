import LogIn from "./User/LogIn";
import SignUp from "./User/SignUp";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const NavBarLanding = () => {
    return ( 
    <>
        <BrowserRouter>
        <p> nav bar</p>
        <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button>
        <button className="login-btn"> <Link to='/LogIn'> Log in </Link> </button>
        
        <Routes>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/LogIn" element={<LogIn/>}/>
            <Route />
        </Routes>

        </BrowserRouter>
    </> 
    );
}
 
export default NavBarLanding;