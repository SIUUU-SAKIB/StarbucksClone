import React, { createContext, useState } from "react";
export const ContextValue = createContext();
export const ContextProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const value = {
    clicked,
    setClicked,
  };
  return (
    <ContextValue.Provider value={value}>{children}</ContextValue.Provider>
  );
};

export default ContextProvider;
