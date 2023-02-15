import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NeedsList from "../components/Need/NeedList";

const  SERVER_URL = "http://localhost:8080/"

const NeedContainer = () => {

    const [needs, setNeeds] = useState([]); 
    const [needsById, setNeedsById] = useState({});
    let {id} = useParams();
    const [error, setError] = useState("");
    
    useEffect(() => {
      fetch(`${SERVER_URL}needs`)
      .then((response) => response.json())
      .then((data) => setNeeds(data))
      .catch((error) => setError(error.message))
    },  []);
    
    // get Need by id

    useEffect (() => {
        fetch(`${SERVER_URL}needs/` + id)
        .then((response)=> response.json())
        .then((data) => setNeedsById(data))
    }, [])

    // POST: creating a new Need
    const addingCaree = ((newNeed) => {
        fetch (`${SERVER_URL}needs`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newNeed),
        })
        
        .then((response)=> response.json())
        .then((response)=> {
            setNeeds([...needs,response])
        })
        })

    // DELETE: deleting Caree
    const deletingNeed = ((needToDelete) => {
        fetch (`${SERVER_URL}needs`, {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(needToDelete),
        })
        
        .then((response)=> response.json())
        .then(response => console.log(response));
        })

    return (  
        <>
        <NeedsList needs={needs}/>
        </>
    );
}
 
export default NeedContainer;