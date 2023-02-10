const Caree = ({caree}) => {
    return ( 
        <>
        <p>Caree Name:{caree.name}</p>
        <p>Caree Age:{caree.age}</p>
        <p>Caree Bio:{caree.bio}</p>
        <p>Caree unique code:{caree.uniqueCode}</p>
        <p>To do list: {caree.toDoList[0].description}</p>
        </>
     );
    }
 
export default Caree;