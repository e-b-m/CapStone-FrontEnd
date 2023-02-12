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

    //     const listItem = caree.toDoList;
    //     const toDos = listItem.map((toDo) => {
    //     return <Caree key={toDo.id} toDo={toDo} />
    // })

    const mapping = carees.map((eachCaree) => {
        return eachCaree.toDoList.map((eachToDo) =>{
            return <p> To Do: {eachToDo.name} Description: {eachToDo.description} Who has taken the task: {eachToDo.user}</p> })

    }, [])

    
    return (  
        <>
        <hr/>
        {careeComponents}
        {mapping}
        {/* <Caree toDoListCaree={toDoListCaree} setToDoListCaree={setToDoListCaree}/> */}
        </>
    );
}
 
export default CareeList;