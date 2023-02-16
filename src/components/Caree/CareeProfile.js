import { useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import Caree from "./Caree";
import NeedForm from "./NeedForm";


const CareeProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const careeOfUser = loggedInUser.toDoList.map((toDo) => {
        return <Caree caree={toDo.caree} key={toDo.caree.id}/>
    })


    return(
        <>
        <h1>{careeOfUser.caree}</h1>
        {careeOfUser}
        <NeedForm/>
        </>
    )


}
export default CareeProfile;