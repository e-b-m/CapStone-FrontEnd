import NeedsList from "../components/Need/NeedList";


const NeedContainer = ({needs}) => {

    return (  
        <>
        <NeedsList needs={needs}/>
        </>
    );
}
 
export default NeedContainer;