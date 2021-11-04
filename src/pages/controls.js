import ControlButtons from "../components/controlButtons";

const ControlsPage = () => {
  return (
    <>
      <h1>Controls</h1>
      <div className="controls">
        <div className="controlBoard">
          <ControlButtons endpoint="home" />
        </div>
        <div className="controlBoard">
          <ControlButtons endpoint="away" />
        </div>
      </div>
    </>
  );
};

export default ControlsPage;
