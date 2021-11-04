import { BroadcastChannel } from "broadcast-channel";
import { useState } from "react";
import styles from "../styles/Scoreboard.module.scss";

const homebc = new BroadcastChannel("home");
const awaybc = new BroadcastChannel("away");

export default function Home() {
  const [homeScore, setHomeScore] = useState(null);
  const [awayScore, setAwayScore] = useState(null);

  // set scores when updated in broadcast
  awaybc.onmessage = function (score) {
    setAwayScore(score);
  };
  homebc.onmessage = function (score) {
    setHomeScore(score);
  };

  return (
    <>
      <h1>Scoreboard</h1>
      <div className={styles.scoreboard}>
        <h2 className={styles.scoreTitle}>Score</h2>
        <div className={styles.underscore}></div>
        {awayScore !== null && homeScore !== null && (
          <div className={styles.scores}>
            <div className={styles.score}>
              <h3>HOME</h3>
              <span>{homeScore}</span>
            </div>
            <div className={styles.score}>
              <h3>AWAY</h3>
              <span>{awayScore}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
