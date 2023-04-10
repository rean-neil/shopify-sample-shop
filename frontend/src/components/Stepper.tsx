import { useEffect, useState } from "react";

interface StepperProps {
  steps: string[];
  status: string;
}

function Stepper({ steps, status }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (status === "SHIPPED") {
      setCurrentStep(3);
    } else if (status === "SCHEDULED") {
      setCurrentStep(2);
    } else if (status === "FULFILLED") {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  }, [status]);

  return (
    <div className="stepper">
      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? "completed" : ""} ${
              index > currentStep ? "disabled" : ""
            }`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;
