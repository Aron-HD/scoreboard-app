import { useHomeContext } from "../context/homeState";
import { useAwayContext } from "../context/awayState";

const ControlButtons = ({ endpoint }) => {
  // home or away endpoint
  const uri = `/api/scores/${endpoint}`;

  const { away, setAway } = useAwayContext();
  const { home, setHome } = useHomeContext();

  const setScore = (newScore) => {
    return endpoint === "home"
      ? setHome(newScore)
      : endpoint === "away"
      ? setAway(newScore)
      : null;
  };

  const updateScore = (scoreName, scoreInc) => {
    const reqPayload = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: scoreName,
        score: scoreInc,
      }),
    };
    try {
      // send patch to update db
      fetch(uri, reqPayload);
      // update state depending on endpoint
      setScore(scoreInc);
      // console.log(`setScore ${scoreName} to ${scoreInc}`);
    } catch (err) {
      console.error(err);
    }
  };

  const score = endpoint === "home" ? home : endpoint === "away" ? away : null;

  return (
    <>
      <h3>{endpoint}</h3>
      <p>{score}</p>
      <button
        type="button"
        onClick={() => {
          updateScore(endpoint, score + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          updateScore(endpoint, 0);
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          updateScore(endpoint, score - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default ControlButtons;
