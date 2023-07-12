import React, { createContext, useState } from 'react';

// Create a new context for the user state
const UserContext = createContext();

// Create a custom hook to access the user context
export const useUserContext = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};

// Create the UserContextProvider component to wrap your app
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
