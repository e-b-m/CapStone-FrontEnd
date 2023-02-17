import Need from "./Need";

const NeedList = ({needs}) => {

    const needComponents = needs.map((need) => {
        return <Need key={need.id} need={need}/>
    })

    return ( 
        <>
            {needComponents}
        </> 
     );
}
 
export default NeedList ;