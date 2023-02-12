// import { useState } from "react";
import Caree from "./Caree";

const CareeList = ({carees}) => {

    const careeComponents = carees.map((caree) => {
        return <Caree key={caree.id} caree={caree}/>
    })

    // making a useState of the to do list of carees, to be able to pass it to other places as props
    //    const[toDoListCaree, setToDoListCaree] = useState(carees.toDoList)
    // going to pass down the toDoListCaree and setDoListCaree to Caree.js as props 


    return (  
        <>
        {careeComponents}
        {/* <Caree toDoListCaree={toDoListCaree} setToDoListCaree={setToDoListCaree}/> */}
        </>
    );
}
 
export default CareeList;