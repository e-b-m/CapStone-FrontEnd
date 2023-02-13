import { useState } from "react";
import Caree from "./Caree";

const CareeList = ({carees}) => {

    const careeComponents = carees.map((caree) => {
        return <Caree key={caree.id} caree={caree}/>
    })

    // making a useState of the to do list of carees, to be able to pass it to other places as props
    //    const[toDoListCaree, setToDoListCaree] = useState(carees.toDoList)
    // going to pass down the toDoListCaree and setDoListCaree to Caree.js as props 


    // trying to map the array within the array...
    // can print out every bit of the toDoList and render it using {mapping}
    // but cannot pass it down to caree, or link it to caree in some other way

    // const mapping = carees.map((eachCaree) => {
    //     return eachCaree.toDoList.map((eachToDo) =>{
    //         return <p>  To Do: {eachToDo.name} Description: {eachToDo.description} Who has taken the task: {eachToDo.user}</p> })

    // }, [])

    
    return (  
        <>
        <hr/>
        {careeComponents}
     
        {/* <Caree toDoListCaree={toDoListCaree} setToDoListCaree={setToDoListCaree}/> */}
        </>
    );
}
 
export default CareeList;