const Need = ({need}) => {
    // useContext = user
    return (  
        <>
        <p>Need: {need.name}</p>
        <p>Description: {need.description}</p>
        <p>{need.completed}</p>
        {/* <p>Caree:{need.caree.name}</p> */}
        </>
    );
}

export default Need;