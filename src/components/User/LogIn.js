import { UserContext} from './ReferenceDataContext';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

const  SERVER_URL = "http://localhost:8080/"

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate() 


    const userLogin = ((userInfo) => {
        fetch(`${SERVER_URL}users/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInfo),
        },
        
        )
        
        .then((response) => response.json())
        .then((response) => {
            setLoggedInUser(response)
            navigate("/UserProfile")
        })
    
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const logInBody = {
            // JSON needs key value pairs
            emailAddress: emailAddress,
            password: password
        }
            userLogin(logInBody)
            // setEmailAddress();
            // setPassword();
        }

    return (  
        <>
        <form onSubmit={handleSubmit}>

            <input 
            id="loginEmailAddress"
            type="text"
            placeholder="Email Address" 
            defaultValue= {emailAddress}
            onChange= {(event)=>setEmailAddress(event.target.value)}
            />

            <input 
            id="loginPassword"
            type="password"
            placeholder="Password" 
            defaultValue= {password}
            onChange= {(event)=>setPassword(event.target.value)}
            />

            <input type="submit" value="submit"/>

        </form>

        </>
    );

    
}
 
export default LogIn;