import { useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import Caree from "./Caree";
import "../stylesheets/CareeProfile.css"; 


const CareeProfile = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const careeOfUser = loggedInUser.toDoList.map((toDo) => {
        return <Caree caree={toDo.caree} key={toDo.caree.id}/>
    })

    return(
        <div className="CareeContainer">
            <h1 className="careeHeading">Your Caree{careeOfUser.caree}</h1>    
            <p className="careeInfo">
                {careeOfUser}
            </p>
        </div>   
    )
}
export default CareeProfile;