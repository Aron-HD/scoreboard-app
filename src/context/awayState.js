import { createContext, useContext, useState } from "react";

const AwayContext = createContext();

export function AwayWrapper({ children }) {
  const [away, setAway] = useState(null);

  return (
    <AwayContext.Provider value={{ away, setAway }}>
      {children}
    </AwayContext.Provider>
  );
}

export function useAwayContext() {
  return useContext(AwayContext);
}
