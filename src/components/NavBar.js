import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CareeProfile from './Caree/CareeProfile';
import Caree from './Caree/Caree';
import { UserContext} from './User/ReferenceDataContext';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBNavbar, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from "../images/ORBIT.png"

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const signOut = () => {
        setLoggedInUser(null);
    }

    return ( 
        <>
    {/* <MDBNavbar bgColor='info' className='text-center text-lg-start text-muted'> */}
        <img/>

        {loggedInUser ? 
        
            <>
              <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container-fluid">
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
                                      <a className="nav-link"><Link to="/UserProfile"> User Profile </Link></a>
                              </li>
                      <li class="nav-item">
                                      <a className="nav-link"><Link to="/CareeProfile"> Caree Profile </Link></a> 
                              </li>
                      <li class="nav-item">
                                      <a className="nav-link" class="nav-link"><Link to="/BubblePage"> Bubble Page </Link></a> 
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
                        class="text-reset me-1 dropdown-toggle hidden-arrow"
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
                              <MDBBtn className='navbtn me-1' color='light' onClick={signOut}>Sign Out</MDBBtn>
                    </div>
                  </div>
                </div>
              </nav>

        
            
            </> 
        : 
        
            <>
            
                    {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
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
    </div>
    <div class="d-flex align-items-center">
      
      <div class="dropdown">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-link">
            <MDBBtn className="login-btn" color='light'><Link to="/LogIn"> Login </Link></MDBBtn>                </li>
          <li class="nav-link">
            <MDBBtn className="signup-btn" color='light'> <Link to="/SignUp"> Sign up </Link> </MDBBtn>           
          </li>
        </ul>
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
          </a>
      </div>
    </div>
  </div>
</nav>

            </>
        }
    {/* </MDBNavbar> */}

        </> 

    );
}
 
export default NavBar;