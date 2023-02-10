import { useEffect, useState } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer';

const  SERVER_URL = "http://localhost:8080/"

function App() {
  
  const [users, setUsers] = useState([]);
  const [carees, setCarees] = useState([]); 
  const [needs, setNeeds] = useState([]); 
  const [error, setError] = useState("");
  
  useEffect(() => {
    fetch(`${SERVER_URL}users`)
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => setError(error.message))
  },  []);
  
  useEffect(() => {
    fetch(`${SERVER_URL}carees`)
    .then((response) => response.json())
    .then((data) => setCarees(data))
    .catch((error) => setError(error.message))
  },  []);
  
  useEffect(() => {
    fetch(`${SERVER_URL}needs`)
    .then((response) => response.json())
    .then((data) => setNeeds(data))
    .catch((error) => setError(error.message))
  },  []);
  
 
  
  return (
    <>
    <p>App.js</p>
    <UserContainer users={users}/>
    </>
  );
}

export default App;
