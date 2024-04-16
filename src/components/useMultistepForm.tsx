import { ReactElement, useState } from "react";

export function useMultistepForm(
  steps: ReactElement[],
  is_student: boolean,
  is_healthcare_provider: boolean
) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      console.log("Curent step index: ", i)
      if (is_student) {
        // If is_student is true, proceed to the next step
        if (i === steps.length - 4) return i + 2;
        return i + 1;
      } else if (is_healthcare_provider) {
        // If is_provider is true, proceed to the step after next
        if (i >= steps.length - 3) return i + 1;
        return i + 2;

      }

      else {
        // If none of the conditions are met, proceed to the next step

        if (i === steps.length - 5) return i + 3;
        return i + 1;
      }
    });
  }

  function back() {
    setCurrentStepIndex((i) => {

      if (is_student) {
        // If is_student is true, proceed to the next step
        if (i === steps.length - 2) return i - 2;
        return i - 1;
      } else if (is_healthcare_provider) {
        // If is_provider is true, proceed to the step after next
        if (i >= steps.length - 2) return i - 1;
        return i - 2;

      }

      else {
        // If none of the conditions are met, proceed to the next step

        if (i === steps.length - 2) return i - 3;
        return i - 1;
      }

      // if (i <= 0) return i;
      // return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  function getCurrentRoute() {
    return steps[currentStepIndex];
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    currentRoute: getCurrentRoute(),
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
