import React, {useState, useContext} from 'react'

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider(props) {
    const [userId, setUserId] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        userId, 
        setUserId,
        isLoggedIn, 
        setIsLoggedIn
    }

    return (<UserContext.Provider value={value}>{props.children}</UserContext.Provider>)
}