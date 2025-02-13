import styles from "./ProgressBar.module.css"; // Import the module CSS

const ProgressBar = ({ step, totalSteps, onStepChange }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.progressContainer}>
      {/* Header Section */}
      <div className={styles.progressHeader}>
        <h2 className={styles.title}>Ticket Selection</h2>
        <span className={styles.stepCount}>Step {step}/{totalSteps}</span>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Navigation Buttons
      <div className={styles.navButtons}>
        <button
          onClick={() => onStepChange(Math.max(1, step - 1))}
          disabled={step === 1}
          className={styles.button}
        >
          Previous
        </button>
        <button
          onClick={() => onStepChange(Math.min(totalSteps, step + 1))}
          disabled={step === totalSteps}
          className={styles.button}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ProgressBar;
