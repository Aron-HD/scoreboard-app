import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function HomeWrapper({ children }) {
  const [home, setHome] = useState(null);

  return (
    <HomeContext.Provider value={{ home, setHome }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  return useContext(HomeContext);
}
