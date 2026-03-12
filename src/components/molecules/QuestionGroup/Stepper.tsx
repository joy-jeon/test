import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface StepperProps {
  currentStep: number;
  steps?: string[];
  className?: string;
}

const circleVariants = cva(
  "flex items-center justify-center rounded-full w-[40px] h-[40px] text-da-b3 transition-colors duration-200",
  {
    variants: {
      status: {
        // !를 붙여서 tailwind-merge가 색상을 삭제하는 것을 방지합니다.
        active: "bg-da-primary !text-da-white",
        base: "bg-da-bg4 !text-da-t-discription",
      },
    },
    defaultVariants: {
      status: "base",
    },
  }
);

const labelVariants = cva(
  "ml-[10px] transition-colors duration-200",
  {
    variants: {
      status: {
        active: "text-da-b2 !text-da-t-title font-bold",
        base: "text-da-b1 !text-da-t-discription",
      },
    },
    defaultVariants: {
      status: "base",
    },
  }
);

const lineVariants = cva(
  "flex-1 h-[1px] mx-[12px] transition-colors duration-200",
  {
    variants: {
      status: {
        active: "bg-da-primary",
        base: "bg-da-bg4",
      },
    },
    defaultVariants: {
      status: "base",
    },
  }
);

export const Stepper = ({ 
  currentStep, 
  steps = ["탐색", "구체화", "정교화"], 
  className 
}: StepperProps) => {
  return (
    <nav className={cn("flex items-center w-full max-w-[800px]", className)}>
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const isLast = stepNumber === steps.length;

        return (
          <React.Fragment key={stepNumber}>
            <div data-component="stepper-item" className="flex items-center flex-shrink-0">
              <div className={cn(circleVariants({ status: isActive ? 'active' : 'base' }))}>
                {String(stepNumber).padStart(2, '0')}
              </div>
              <span className={cn(labelVariants({ status: isActive ? 'active' : 'base' }))}>
                {label}
              </span>
            </div>

            {!isLast && (
              <div 
                className={cn(lineVariants({ 
                  status: stepNumber < currentStep ? 'active' : 'base' 
                }))} 
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Stepper;