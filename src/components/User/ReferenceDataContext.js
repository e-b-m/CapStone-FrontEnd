import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    
    const [loggedInUser, setLoggedInUser] = useState(undefined);
    const [myCaree, setMyCaree] = useState(undefined);
    
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider, };
