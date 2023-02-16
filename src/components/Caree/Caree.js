import { useEffect, useState } from "react";
import NeedForm from "./NeedForm";

const  SERVER_URL = "http://localhost:8080/"

const Caree = ({caree}) => {
    const [mappedTasks, setMappedTasks] = useState([])
    const [grabCaree, setGrabCaree] = useState([])

    useEffect(() => {
        if(caree.id >= 0){
            console.log(caree);
            fetch(`${SERVER_URL}carees/` + caree.id)
      .then((response) => response.json())
      .then((data) => setGrabCaree(data))
      .then(() => {
        
      })  
    }}, [])

    useEffect(() => {
        if(grabCaree.toDoList){
        setMappedTasks(grabCaree.toDoList.map((toDo) => {
        return (
            <li>
                <p>{toDo.name}</p>
                <p>{toDo.description}</p>
            </li>
        )}))
    }}, [grabCaree])


    

    return (
        <>
        <h1>Your Caree</h1>
        <p>Caree Name: {caree.name}</p>
        <p>Caree Age: {caree.age}</p>
        <p>Caree Bio: {caree.bio}</p>
        <p>Caree unique code: {caree.uniqueCode}</p>
        <ul>
        {mappedTasks}
        </ul>
        <NeedForm caree={caree}/>
        </>
     );
    }
 
export default Caree;