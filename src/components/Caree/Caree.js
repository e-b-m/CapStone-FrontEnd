const Caree = ({caree }) => {
    // toDoListCaree, setToDoListCaree
    // const listItem = caree.toDoList;
    // const toDos = listItem.map((toDo) => {
    //     return <Caree key={toDo.id} toDo={toDo} />
    // })

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
        <p>To do list: {caree.toDoList.name}</p>
        </>
     );
    }
 
export default Caree;