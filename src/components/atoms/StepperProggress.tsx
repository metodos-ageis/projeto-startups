import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export interface StepperProgressProps {
  steps: number;
  currentStep: number;
  color?: "primary" | "secondary";
}

function StepperProggress({
  steps,
  currentStep,
  color = "primary",
}: StepperProgressProps) {
  return (
    <div className="flex items-center justify-center">
      {[...Array(steps)].map((_, index) => (
        <Fragment key={index}>
          <div
            data-active={index < currentStep - 1}
            data-current={index === currentStep - 1}
            className={twMerge(
              "h-5 w-5 text-xs text-gray-300 border-2 border-gray-300 rounded-full",
              "peer flex items-center justify-center bg-opacity-0 transition-all duration-300",
              "data-[active=true]:text-white data-[current=true]:text-primary",
              "data-[active=true]:bg-opacity-100",
              color === "primary"
                ? "data-[current=true]:border-primary data-[active=true]:border-primary"
                : "data-[current=true]:border-secondary data-[active=true]:border-secondary",
              color === "primary" ? "bg-primary" : "bg-secondary"
            )}
          >
            {index + 1}
          </div>
          {index !== steps - 1 && (
            <div
              data-active={index < currentStep - 1}
              className={twMerge(
                "relative w-16 h-0.5 bg-gray-300",
                "after:content-[''] after:h-0.5 after:absolute after:inset-0 after:w-0",
                "after:data-[active=true]:w-16",
                color === "primary" ? "after:bg-primary" : "after:bg-secondary",
                "after:transition-all after:duration-300"
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default StepperProggress;
