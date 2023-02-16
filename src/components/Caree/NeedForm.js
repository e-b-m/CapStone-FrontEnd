import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import Caree from "./Caree";

const SERVER_URL = "http://localhost:8080/";

const NeedForm = ({caree, user}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [complete, setComplete] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    


    const addNeed = (newNeed) => {
            fetch(`${SERVER_URL}needs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newNeed),
            }).then((response) => response.json());
            };
        
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const postNeed = {
            "name" : name,
            "description" : description,
            "complete" : "false",
            "user" : null,
            "caree" : caree,
            "user" : user
        };
        // console.log(postNeed);
        addNeed(postNeed);
        setName("");
        setDescription("");
    }
    //  console.log(caree);

    return(
        <> 
    <form onSubmit={handleFormSubmit}>
                <h3>Add a new task {caree.name} needs help with: </h3>
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
            </form></>
    )
}

export default NeedForm;