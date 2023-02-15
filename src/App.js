
import './App.css';
import NeedContainer from './containers/NeedContainer';
import UserContainer from './containers/UserContainer';
import CareeContainer from './containers/CareeContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import SignUp from './components/User/SignUp';



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
    <Form />
    </UserContext.Provider>
    <p>App.js</p>
    {/* <UserContainer />
    <NeedContainer /> */}
    {/* <CareeContainer /> */}
    <SignUp/>
    </>
  );
}


function Form() {
  return (
    <div className = "Orbit" >
  <Panel title = "Welcome to Orbit">
    <Button className>Sign Up</Button> 
    <Button>Log-in</Button> 
  </Panel>
  </div>
  )
}


function Panel({title, children}){
  const user = useContext(UserContext); 
  const className = 'panel-' + user; 

  return (
    <section className={className}>
    <h1>{title}</h1>
    {children}
    </section>
  )
}


function Button({children}) {
  const user = useContext(UserContext); 
  const className = 'button-' + user; 

  return (
    <button className={className}>
      {children}
    </button>
  )
}


export default App;
