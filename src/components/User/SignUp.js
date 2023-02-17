import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ReferenceDataContext";
import '../stylesheets/SignUp.css';

const SERVER_URL = "http://localhost:8080/";

const SignUp = () => {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const addingUser = (newUser) => {
    console.log(newUser);
    fetch(`${SERVER_URL}users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((response) => response.json());
  };

  const handleFormSubmit = (event) => {
    const postBody = {
      name,
      password,
      emailAddress,
      location,
    };

    addingUser(postBody);
    setName("");
    setPassword("");
    setEmailAddress("");
    setLocation("");
    navigate("/LogIn");
  };

  return (
    <div className="signUpContainer">
      <div className="signUp">
        <h1 className="signUpHeading">Sign-up</h1>
        <form onSubmit={handleFormSubmit}>
          <p>Name: </p>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <p>Password: </p>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <p>Email Address: </p>
          <input
            id="emailAddress"
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />

          <p>Location: </p>
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

          <p> </p>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
