

const Caree = ({caree}) => {

    return (
        <>
        <h1>Your Caree</h1>
        <p>Caree Name: {caree.name}</p>
        <p>Caree Age: {caree.age}</p>
        <p>Caree Bio: {caree.bio}</p>
        <p>Caree unique code: {caree.uniqueCode}</p>
        
        </>
     );
    }
 
export default Caree;