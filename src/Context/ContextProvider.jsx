import React, { createContext } from 'react';
export const ContextValue = createContext()
export const ContextProvider = ({children}) => {
    const value = {
    
    }
    return (
        <ContextValue.Provider value={value}>{children}</ContextValue.Provider>
    );
};

export default ContextProvider;