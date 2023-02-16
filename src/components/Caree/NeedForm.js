import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import Caree from "./Caree";

const SERVER_URL = "http://localhost:8080/";

const NeedForm = ({careeOfUser}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [complete, setComplete] = useState(false)
    const [caree, setCaree] = useState()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const anything = loggedInUser.toDoList.map((toDo) => {
        return <Caree caree={toDo.caree} key={toDo.caree.id}/>
    })

    const addNeed = (newNeed) => {
            fetch(`${SERVER_URL}needs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newNeed),
            }).then((response) => response.json());
            };
        
    const handleFormSubmit = () => {
        const postNeed = {
            name,
            description,
            caree,
        };
        addNeed(postNeed);
        setName("");
        setDescription("");
        setComplete(false);
        setCaree()
    
    }
    //  console.log(loggedInUser);
    
    return(
    <form onSubmit={handleFormSubmit}>
                <h1>Add a new task you would like support with</h1>
                <input
                id="name"
                type="text"
                placeholder="name of task"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
     
                <input
                id="description"
                type="text"
                placeholder="details"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
                <input type="submit" value="submit" />
            </form>
    )
}

export default NeedForm;