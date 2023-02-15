import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CareeList from "../components/Caree/CareeList";


const  SERVER_URL = "http://localhost:8080/"

const CareeContainer = () => {

    const [error, setError] = useState("");
    const [carees, setCarees] = useState([]); 
    const [careeById, setCareeById] = useState({}); 
    const [careeByUC, setCareeByUC] = useState({}); 
    let {id} = useParams();
    let {uniqueCode} = useParams();


    // Fetching all carees
    useEffect(() => {
      fetch(`${SERVER_URL}carees`)
      .then((response) => response.json())
      .then((data) => setCarees(data))
      .catch((error) => setError(error.message))
    },  []);

    // get by id
    useEffect (() => {
      fetch(`${SERVER_URL}carees/` + id)
      .then((response) => response.json())
      .then((data) => setCareeById(data))
    }, [])

    useEffect (() => {
      fetch(`${SERVER_URL}carees/` + uniqueCode)
      .then((response) => response.json())
      .then((data) => setCareeByUC(data))
    }, [])

    // post for creating a caree
    
    const addingCaree = ((newCaree) => {
      fetch (`${SERVER_URL}carees`, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCaree),
      })
      
      .then((response)=> response.json())
      .then((response)=> {
        setUser([...carees,response])
      })
    })
    
    // get by uniqueCode
    
    // patch mapping for updatingACaree
    // (delete mapping)
    
    return( 
      <>
        <CareeList carees={carees}/>
        
        </>

     );
}
 
export default CareeContainer;