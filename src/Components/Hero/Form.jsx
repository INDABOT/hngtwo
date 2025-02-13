/* eslint-disable no-undef */
import { useState } from "react";
import styles from "./Form.module.css";
import { ChevronDown } from "lucide-react";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1); // Step management
  const [number, setNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setNumber(value);
    setIsOpen(false);
  };

  // ProgressBar Component Inside Form
  const ProgressBar = ({ step, totalSteps, onStepChange }) => {
    const progress = (step / totalSteps) * 100;

    return (
      <div className={styles.progressContainer}>
        {/* Header Section */}
        <div className={styles.progressHeader}>
          <h2 className={styles.title}>Ticket Selection</h2>
          <span className={styles.stepCount}>
            Step {step}/{totalSteps}
          </span>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Navigation Buttons */}
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
        </div>
      </div>
    );
  };

  return (
    <form className={styles.form}>
      {/* Progress Bar Section */}
      <ProgressBar
        step={currentStep}
        totalSteps={3}
        onStepChange={setCurrentStep}
      />

      <div className={styles.FormSection}>
        <div className={styles.FormTop}>
          <h1>Techember Fest ”25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className={styles.location}>
            <p>📍 [Event Location]</p>
            <p>| |</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />
      <span>Select Ticket type: </span>

      {/* Ticket Selection */}
      <div className={styles.FormMid}>
        <div className={styles.FirstMid}>
          <p className={styles.Fp}>Free</p>
          <p>Regular Access</p>
          <small>20/52</small>
        </div>
        <div className={styles.FirstMid}>
          <p className={styles.Fp}>$150</p>
          <p>VIP Access </p>
          <small>20/52</small>
        </div>
        <div className={styles.FirstMid}>
          <p className={styles.Fp}>$150</p>
          <p>VIP Access </p>
          <small>20/52</small>
        </div>
      </div>

      <span> Number of Tickets:</span>

      {/* Ticket Dropdown */}
      <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.number}>{number}</span>
        <ChevronDown size={20} className={styles.icon} />

        {isOpen && (
          <div className={styles.dropdown}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={styles.option}
                onClick={() => handleSelect(num)}
              >
                {num}
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
