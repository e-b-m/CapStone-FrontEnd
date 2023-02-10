import Caree from "./Caree";

const CareeList = ({carees}) => {

    const careeComponents = carees.map((caree) => {
        return <Caree key={caree.id} caree={caree}/>
    })



    return (  
        <>
        {careeComponents}

        </>
    );
}
 
export default CareeList;