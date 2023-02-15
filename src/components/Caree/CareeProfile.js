import { Children, useContext } from "react"
import { UserContext } from "../User/ReferenceDataContext"
import { useState, useEffect } from "react"
import Caree from "./Caree"
import CareeList from "./CareeList"
import { useParams } from "react-router-dom"
import CareeContainer from "../../containers/CareeContainer"
import User from "../User/User"

const  SERVER_URL = "http://localhost:8080/"

const CareeProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [carees, setCarees] = useState([]); 
    let {id} = useParams();

    // const userComps = loggedInUser.map((caree) => {
    //     return <loggedInUser key={id} caree={caree}/>
    // })

    // get caree by id 
    // const myCaree= ((carees) => {
    //     console.log(carees);
    //     fetch(`${SERVER_URL}carees/1`,{
    //         method: "GET",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(carees)
    //     })
    //     .then((response) => response.json())
    //     .then((response) => setLoggedInUser(response))
    //   })

    return(
        <>

        <p>dskjfhalskdf</p>

        <setLoggedInUser setLoggedInUser= {setLoggedInUser} carees={carees}/>
        
  
        </>
    )


}
export default CareeProfile;