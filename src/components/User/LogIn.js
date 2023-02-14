import { useState } from "react";

const LogIn = ({users}) => {

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")

    // const listOfEmail = user.emailAddress.map((users), )
    console.log(users);

    const handleSubmit = (event) => {
        const logInBody = {
            emailAddress,
            password
        }

    }

    return (  
        <>
        </>
    );
}
 
export default LogIn;