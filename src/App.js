import { useEffect, useState } from 'react';
import './App.css';
import NeedContainer from './containers/NeedContainer';
import UserContainer from './containers/UserContainer';
import CareeContainer from './containers/CareeContainer';



function App() {
  
  
  return (
    <>
    <p>App.js</p>
    <UserContainer users={users}/>
    <NeedContainer needs={needs}/>
    <CareeContainer carees={carees}/>
    </>
  );
}

export default App;
