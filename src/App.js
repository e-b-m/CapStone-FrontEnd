
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import SignUp from './components/User/SignUp';
import LogIn from './components/User/LogIn';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';


// login form + user State
 // useContext = /needs/{need.id}/{user.id}
 // ^ to get logged in user
 // logged in user is set at highest level, then drilled down

const UserContext = createContext (null); 

function App() {
const [user, setUser] = useState()   

  return (
    <>
    <UserContext.Provider value={user}>
      {/* <Form /> */}
      <LandingPage/>
      {/* <SignUp/>
      <LogIn user={user}/> */}
      <p>App.js</p>
    </UserContext.Provider>

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
