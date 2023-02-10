const Need = ({need}) => {
    return (  
        <>
        <p>{need.name}</p>
        <p>{need.description}</p>
        <p>{need.completed}</p>
        <p>{need.caree.name}</p>
        </>
    );
}
 
export default Need;