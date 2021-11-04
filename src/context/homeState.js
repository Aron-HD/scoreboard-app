import { BroadcastChannel } from "broadcast-channel";
import { createContext, useContext, useState, useEffect } from "react";

// Connect to broadcast channel
const channel = new BroadcastChannel("home");

const HomeContext = createContext();

export function HomeWrapper({ children }) {
  const [home, setHome] = useState(null);
  const endpoint = "/api/scores/home";

  useEffect(() => {
    async function getScore() {
      const fetchScore = await fetch(endpoint);
      const scoreData = await fetchScore.json();
      setHome(scoreData.score);
      // broadcast the updated score to scoreboard
      channel.postMessage(scoreData.score);
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
