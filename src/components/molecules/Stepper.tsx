import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { StepperProggress, StepperProgressProps, Text } from "../atoms";

export interface StepperRef {
  next: () => void;
  previous: () => void;
}

interface StepperProps extends Pick<StepperProgressProps, "color"> {
  steps: {
    title: string;
    description?: string;
    component: React.ReactNode;
  }[];

  onChange?: (step: number) => void;
}

function Stepper(
  { steps, color, onChange }: StepperProps,
  ref: ForwardedRef<StepperRef>
) {
  const [currentStep, setCurrentStep] = useState(1);
  const step = steps.at(currentStep - 1);

  useImperativeHandle(
    ref,
    () => ({
      next() {
        if (currentStep < steps.length) {
          setCurrentStep(currentStep + 1);
        }
      },
      previous() {
        if (currentStep > 1) {
          setCurrentStep(currentStep - 1);
        }
      },
    }),
    [currentStep, steps.length]
  );

  useEffect(() => {
    onChange?.(currentStep);
  }, [onChange, currentStep]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <StepperProggress
          color={color}
          steps={steps.length}
          currentStep={currentStep}
        />
        <Text
          variant="h4"
          className="pt-4 text-sm font-medium text-primary uppercase"
        >
          {step?.title}
        </Text>
      </div>
      <div className="border-red-400 max-w-[20rem] overflow-x-clip">
        <div
          className="w-full flex-nowrap h-full mt-8 flex gap-8 transition-[transform] duration-300"
          style={{
            transform: `translateX(calc(-${(currentStep - 1) * 100}% - ${
              (currentStep - 1) * 2
            }rem))`,
          }}
        >
          {steps.map((step, index) => (
            <div key={index}>{step.component}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Stepper);
