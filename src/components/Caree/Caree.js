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
            <>
            
            <ul>
            <li><h4>{toDo.name}</h4></li>    
            <p>{toDo.description}</p>
           </ul>
           </>
        )}))
    }}, [grabCaree])


    

    return (
        <>
       
        <p>Caree Name: {caree.name}</p>
        <p>Caree Age: {caree.age}</p>
        <p>Caree Bio: {caree.bio}</p>
        <p>Caree unique code: {caree.uniqueCode}</p>
        <h3>Here are your tasks</h3>
        {mappedTasks}
        
        <NeedForm caree={caree}/>
        </>
     );
    }
 
export default Caree;