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


    return (  
        <>
        <NeedsList needs={needs}/>
        </>
    );
}
 
export default NeedContainer;