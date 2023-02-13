
import './App.css';
import NeedContainer from './containers/NeedContainer';
import UserContainer from './containers/UserContainer';
import CareeContainer from './containers/CareeContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// login form + user State
 // useContext = /needs/{need.id}/{user.id}
 // ^ to get logged in user
 // logged in user is set at highest level, then drilled down

function App() {
  
  
  return (
    <>
    <p>App.js</p>
    {/* <UserContainer />
    <NeedContainer /> */}
    <CareeContainer />
    </>
  );
}

export default App;
