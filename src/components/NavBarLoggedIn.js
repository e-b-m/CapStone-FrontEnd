import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import CareeProfile from './CareeProfile';
import BubblePage from './BubblePage';

const NavBarLoggedIn = () => {
    return ( 
        <>
        <p> Logged in user nav bar </p>
        <BrowserRouter>
        <button className="userprofile-btn"><Link to="/UserProfile"> User Profile </Link></button>
        <button className="careeprofile-btn"><Link to="/CareeProfile"> Caree Profile </Link></button>
        <button className="bubblepage-btn"><Link to="/BubblePage"> Bubble Page </Link></button>
        <Routes>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            <Route path="/CareeProfile" element={<CareeProfile/>}/>
            <Route path="/BubblePage" element={<BubblePage/>}/>
        </Routes>
        </BrowserRouter>
        </> 
    );
}
 
export default NavBarLoggedIn;