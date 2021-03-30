import React, { createContext } from "react";


export const AllContext = createContext({});

export const AllProvider = (props) => {
  const { children } = props;
  return(
    <AllContext.Provider>
      {children}
    </AllContext.Provider>
  );
};