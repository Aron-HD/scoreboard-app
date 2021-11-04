import ControlButtons from "../components/controlbuttons";
import styles from "../styles/Controls.module.scss";

const ControlsPage = () => {
  return (
    <>
      <h1>Controls</h1>
      <div className={styles.controls}>
        <div className={styles.controlButtons}>
          <ControlButtons endpoint="home" />
        </div>
        <div className={styles.controlButtons}>
          <ControlButtons endpoint="away" />
        </div>
      </div>
    </>
  );
};

export default ControlsPage;
