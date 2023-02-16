
import './App.css';
import './Bubble.css';
import NeedContainer from './containers/NeedContainer';
import UserContainer from './containers/UserContainer';
import CareeContainer from './containers/CareeContainer';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import SignUp from './components/User/SignUp';
import LogIn from './components/User/LogIn';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import UserProfile from './Pages/UserProfile';
import CareeProfile from './components/Caree/CareeProfile';
import BubblePage from './Pages/BubblePage';
import { UserContext, UserContextProvider } from './components/User/ReferenceDataContext';
// import orbitLogo from 'src/orbitLogo.png';


 // login form + user State
 // useContext = /needs/{need.id}/{user.id}
 // ^ to get logged in user
 // logged in user is set at highest level, then drilled down

// const UserContext = createContext (null); 

function App() {
// const [loggedInUser, setLoggedInUser] = useState() 


  return (
    <>
    {/* <div><img src = {require("src/orbitLogo")} alt="Orbit Logo"/></div> */}
    <Hero/>
    {/* <UserContext.Provider value={loggedInUser}> */}
      <UserContextProvider>
      {/* <Form /> */}      
      <BrowserRouter>
      <NavBar/>
      {/* <CareeContainer/> */}
      <Routes>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path ='/SignUp' element={<SignUp/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            <Route path="/CareeProfile" element={<CareeProfile/>}/>
            <Route path="/BubblePage" element={<BubblePage/>}/>

        </Routes>
        </BrowserRouter>
      {/* <SignUp/>
      <LogIn user={user}/> */}
      <p>App.js</p>
      </UserContextProvider>
    {/* </UserContext.Provider> */}


    <Footer/>
        
    {/* <UserContainer />
    <NeedContainer /> 
    <CareeContainer /> */}
    </>
  );
}


// function Form() {
//   return (
//   <Panel title = "Welcome to Orbit">
//     <Button>Sign Up</Button> 
//     <Button>Log-in</Button> 
//   </Panel>
//   )
// }


// function Panel({title, children}){
//   const user = useContext(UserContext); 
//   const className = 'panel-' + user; 

//   return (
//     <section className={className}>
//     <h1>{title}</h1>
//     {children}
//     </section>
//   )
// }


// function Button({children}) {
//   const user = useContext(UserContext); 
//   const className = 'button-' + user; 

//   return (
//     <button className={className}>
//       {children}
//     </button>
//   )
// }


export default App;
