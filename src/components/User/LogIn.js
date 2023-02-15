import { useState } from "react";

const  SERVER_URL = "http://localhost:8080/"

const LogIn = ({users}) => {

    const [loginEmailAddress, setLoginEmailAddress] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState()

    const userLogin = ((userInfo) => {
        fetch(`${SERVER_URL}users/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userInfo),
        },
        
        )
        
        .then((response) => response.json())
        .then((response) => {
            setUser(response)
        })
    
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const logInBody = {
            loginEmailAddress,
            loginPassword
        }
            userLogin(logInBody)
            // setLoginEmailAddress();
            // setLoginPassword();
        }

    return (  
        <>
        <form onSubmit={handleSubmit}>

            <input 
            id="loginEmailAddress"
            type="text"
            placeholder="Email Address" 
            defaultValue= {loginEmailAddress}
            // onChange= {(event)=>setEmailAddress(event.target.value)}
            />

            <input 
            id="loginPassword"
            type="password"
            placeholder="Password" 
            defaultValue= {loginPassword}
            // onChange= {(event)=>setPassword(event.target.value)}
            />

            <input type="submit" value="submit"/>

        </form>

        </>
    );
}
 
export default LogIn;