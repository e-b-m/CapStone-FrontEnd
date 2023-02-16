import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogIn from './User/LogIn';
import { UserContext} from './User/ReferenceDataContext';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBNavbar } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from "../images/ORBIT.png"

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const signOut = () => {
        setLoggedInUser(null);
    }

    return ( 
        <>
    <MDBNavbar bgColor='info' className='text-center text-lg-start text-muted'>
        <p className='p-4'>  
                <a href='' className='text-reset fw-bold mb-4'>ORBIT</a>   
        </p>
        <img/>

        {loggedInUser ? 
        
            <>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                        <button className="navbtn"><Link to="/UserProfile"> User Profile </Link></button>
                </li>
                <li class="nav-item">
                        <button className="navbtn"><Link to="/CareeProfile"> Caree Profile </Link></button> 
                </li>
                <li class="nav-item">
                        <button className="navbtn"><Link to="/BubblePage"> Bubble Page </Link></button> 
                </li>
            </ul>
                <button className='navbtn' onClick={signOut}>Sign Out</button>
            
            </> 
        
        : 
        
            <>
            
                <MDBContainer className='text-center text-md-start mt-5'>
                <button className="signup-btn"> <Link to="/SignUp"> Sign up </Link> </button>
                <button className="login-btn"><Link to="/LogIn"> Login </Link></button>
    </MDBContainer>
                
            </>
        }
    </MDBNavbar>

    {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a class="navbar-brand mt-2 mt-lg-1" href="#">
        <img
          src={logo}
          height="75"
          alt="ORBIT Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">User Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Caree Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bubble Page</a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>

    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">10</span>
        </a>
      </div>
      {/* USER LOGO */}
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="70"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
</nav>
        </> 

    );
}
 
export default NavBar;