import { useEffect, useState } from "react";

const  SERVER_URL = "http://localhost:8080/"

const SignUp = ({user, setUser}) => {

    const [name, setName] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [emailAddress, setEmailAddress] = useState(""); 
    const [location, setLocation] = useState(""); 

    const addingUser = ((newUser) => {
        fetch (`${SERVER_URL}users`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser),
        })

        .then((response)=> response.json())
        .then((response)=> {
            setUser([...user,response])
        })
})

    const handleFormSubmit = (event) => {
        const postBody = {
            name, password, emailAddress, location
        }

        addingUser(postBody) 
        setName(""); 
        setPassword(""); 
        setEmailAddress(""); 
        setLocation(""); 
     } 

    return (  
    <>
    <form onSubmit={handleFormSubmit}>
        <input 
        id="name"
        type="text"
        placeholder="Name" 
        value= {name}
        onChange= {(event)=>setName(event.target.value)}
        />

        <input 
        id="password"
        type="password"
        placeholder="Password" 
        value= {password}
        onChange= {(event)=>setPassword(event.target.value)}
        />

        <input 
        id="emailAddress"
        type="text"
        placeholder="Email Address" 
        value= {emailAddress}
        onChange= {(event)=>setEmailAddress(event.target.value)}
        />

        <input 
        id="location"
        type="text"
        placeholder="Location" 
        value= {location}
        onChange= {(event)=>setLocation(event.target.value)}
        />

        <input type="submit" value="submit"/>
    </form>
    </>

    );
}
 
export default SignUp;