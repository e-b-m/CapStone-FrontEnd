import { useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import Caree from "./Caree";


const CareeProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const careeOfUser = loggedInUser.toDoList.map((toDo) => {
        return <Caree caree={toDo.caree} key={toDo.caree.id}/>
    })

    console.log(careeOfUser);



    return(
        <>

        <p>dskjfhalskdf</p>
        <h1>{careeOfUser.caree}</h1>
        {careeOfUser}
  
        </>
    )


}
export default CareeProfile;