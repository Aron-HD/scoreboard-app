import { createContext, useContext, useState, useEffect } from "react";

const HomeContext = createContext();

export function HomeWrapper({ children }) {
  const [home, setHome] = useState(null);
  const endpoint = "/api/scores/home";

  useEffect(() => {
    async function getScore() {
      const fetchScore = await fetch(endpoint);
      const scoreData = await fetchScore.json();
      setHome(scoreData.score);
    }
    getScore();
  });

  return (
    <HomeContext.Provider value={{ home, setHome }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  return useContext(HomeContext);
}
