import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(undefined);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider, };
