const Caree = ({caree}) => {

    // const listItem = caree.toDoList;
    // const toDos = listItem.map((toDo) => {
    //     return <Caree key={toDo.id} toDo={toDo} />
    // })

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