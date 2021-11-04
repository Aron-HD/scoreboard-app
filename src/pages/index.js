import { useState } from "react";

import styles from "../styles/Scoreboard.module.scss";

export default function Home() {
  const [homeScore, setHomeScore] = useState(11);
  const [awayScore, setAwayScore] = useState(25);
  return (
    <>
      <h1>Scoreboard</h1>
      <div className={styles.scoreboard}>
        <h2 className={styles.scoreTitle}>Score</h2>
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
      </div>
    </>
  );
}
