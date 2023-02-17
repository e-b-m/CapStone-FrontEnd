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

    // GET: Fetching all Carees
    useEffect(() => {
      fetch(`${SERVER_URL}carees`)
      .then((response) => response.json())
      .then((data) => setCarees(data))
      .catch((error) => setError(error.message))
    },  []);

    // GET: by id
    useEffect (() => {
      fetch(`${SERVER_URL}carees/` + id)
      .then((response) => response.json())
      .then((data) => setCareeById(data))
    }, [])
    
    // GET: by uniqueCode
    useEffect (() => {
      fetch(`${SERVER_URL}carees/` + uniqueCode)
      .then((response) => response.json())
      .then((data) => setCareeByUC(data))
    }, [])

//-------------------------------------------------------------------------    
    // POST: creating a new Caree
    const addingCaree = ((newCaree) => {
      fetch (`${SERVER_URL}carees`, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCaree),
      })
      
      .then((response)=> response.json())
      .then((response)=> {
        setCarees([...carees,response])
      })
    })
    
    // PATCH: updating a caree
    const updatingCaree = ((updatedCaree) => {
      fetch (`${SERVER_URL}carees/` + id, {
          method: "PATCH", 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updatedCaree),
      })

      .then((response)=> response.json())
      .then((response)=> console.log( response)
      // { setCarees(response) }
      )
    })

    // DELETE: deleting Caree
    const deletingCaree = ((careeToDelete) => {
      fetch (`${SERVER_URL}carees`, {
        method: "DELETE", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(careeToDelete),
      })
      
      .then((response)=> response.json())
      .then(response => console.log(response));
    })
//-------------------------------------------------------------------------    
    
    return( 
      <>
        <CareeList carees={carees}/>
      </>
     );
}
 
export default CareeContainer;