import { BroadcastChannel } from "broadcast-channel";
import { createContext, useContext, useState, useEffect } from "react";

// Connect to broadcast channel
const channel = new BroadcastChannel("away");

const AwayContext = createContext();

export function AwayWrapper({ children }) {
  const [away, setAway] = useState(null);
  const endpoint = "/api/scores/away";

  useEffect(() => {
    async function getScore() {
      const fetchScore = await fetch(endpoint);
      const scoreData = await fetchScore.json();
      setAway(scoreData.score);
      // broadcast the updated score to scoreboard
      channel.postMessage(scoreData.score);
    }
    getScore();
  });

  return (
    <AwayContext.Provider value={{ away, setAway }}>
      {children}
    </AwayContext.Provider>
  );
}

export function useAwayContext() {
  return useContext(AwayContext);
}
