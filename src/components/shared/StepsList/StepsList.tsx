import type { StepListProps } from "./StepsList.types";
import Step from "./Step/Step";

/**
 * Renders a list steps separated by a line
 *
 * Props are defined in {@link StepListProps}.
 */
export default function StepsList({ stepsList, currentStep }: StepListProps) {
  return (
    <div
      className="flex justify-center items-center gap-4
                lg:flex-col"
      aria-hidden="true"
    >
      {stepsList.map((step, index) => (
        <>
          <Step
            key={index}
            isSelected={index === currentStep}
            isCompleted={index < currentStep}
            number={index + 1}
            description={step}
          />

          {/*Separation line*/}
          {stepsList.length - 1 > index ? (
            <div
              className="w-full h-0.5 
                     bg-gray-300 
                       lg:w-0.5 lg:h-20"
            ></div>
          ) : null}
        </>
      ))}
    </div>
  );
}
