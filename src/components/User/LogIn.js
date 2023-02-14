import { useState } from "react";

const  SERVER_URL = "http://localhost:8080/"

const LogIn = ({users}) => {

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUser, setLoggedInUser] = useState({})

    const userLogin = ((userInfo) => {
        fetch(`${SERVER_URL}users/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInfo),
        })
        
        .then((response) => response.json())
        .then((response) => {
            setLoggedInUser({response})
        })
    
    })

    // const listOfEmail = user.emailAddress.map((users), )
    console.log(users);

    const handleSubmit = (event) => {
        event.preventDefault();
        const logInBody = {
            emailAddress,
            password
        }
            userLogin(logInBody)
            // setEmailAddress("");
            // setPassword("");
        }

    return (  
        <>
        <form onSubmit={handleSubmit}>

            <input 
            id="emailAddress"
            type="text"
            placeholder="Email Address" 
            value= {emailAddress}
            onChange= {(event)=>setEmailAddress(event.target.value)}
            />

            <input 
            id="password"
            type="password"
            placeholder="Password" 
            value= {password}
            onChange= {(event)=>setPassword(event.target.value)}
            />

            <input type="submit" value="submit"/>

            {console.log("logged in")}
        </form>

        </>
    );
}
 
export default LogIn;