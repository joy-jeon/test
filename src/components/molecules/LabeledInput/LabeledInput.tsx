import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/lib/utils';

const labeledInputVariants = cva(
  "flex w-full text-da-b2 text-da-t-body",
  {
    variants: {
      layout: {
        row: "flex-row items-center gap-[4px]",
        col: "flex-col items-start gap-[4px]",
      },
    },
    defaultVariants: {
      layout: "row",
    },
  }
);

interface LabeledInputProps extends VariantProps<typeof labeledInputVariants> {
  label: string;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
  required?: boolean;
}

/**
 * LabeledInput Molecule
 * - Label과 Input(children)의 쌍을 관리합니다.
 * - 반복 시 여백(8px)은 이 컴포넌트를 감싸는 부모의 gap-[8px]으로 제어하는 것을 권장합니다.
 */
export const LabeledInput = ({
  label,
  children,
  layout,
  className,
  htmlFor,
  required,
}: LabeledInputProps) => {
  const generatedId = useId();
  const id = htmlFor || generatedId;

  return (
    <div className={cn(labeledInputVariants({ layout }), className)}>
      <label
        htmlFor={id}
        className="flex flex-shrink-0 font-bold text-da-t-title"
      >
        {label}
        {required && <span className="text-da-t-attention">*</span>}
      </label>
      {/* Input 영역: 상위에서 주입하거나 직접 input을 배치 */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};