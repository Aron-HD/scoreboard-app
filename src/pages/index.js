export default function Home() {
  return (
    <>
      <h1>Scoreboard</h1>
      <div className="scoreboard">
        <div className="scores">
          <div className="score">
            <h1>HOME</h1>
            <span>0</span>
          </div>
          <div className="score">
            <h1>AWAY</h1>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
