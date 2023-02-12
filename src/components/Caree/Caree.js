const Caree = ({caree, eachToDo}) => {

    // these were props that were in line 1: toDoListCaree, setToDoListCaree

    // making a method that will show all the current todos and then add the new todos
    // const addNewToDoCaree = (newToDo) => {

    //     fetch(`${SERVER_URL}needs`,{
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(newToDo),
    //     })
    //     .then((response) =>response.json())
    //     .then((response)=> {
    //     setToDoListCaree([...toDoListCaree,response]);
    //     })
    // }

    // I think this might need to be in a form... 
    // we need to make useStates for each state of the todo and then assign it via e.target.value

  

    return (
        <>
        <p>Caree Name:{caree.name}</p>
        <p>Caree Age:{caree.age}</p>
        <p>Caree Bio:{caree.bio}</p>
        <p>Caree unique code:{caree.uniqueCode}</p>
        {/* <p>To do list: {eachToDo.name} Description: {eachToDo.description} Who has taken the task: {eachToDo.user}</p> */}
        </>
     );
    }
 
export default Caree;