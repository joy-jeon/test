import React, { ReactNode, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms/Icon/Icon";

const comboVariants = cva(
  `relative flex items-center w-full h-[32px] px-[12px] gap-[4px]
  text-da-b2 text-da-t-body truncate border rounded-[8px] transition-all duration-200`,
  {
    variants: {
      status: {
        default: "bg-da-white border-da-form-input-line",
        error: "bg-da-white border-da-t-attention",
        essential: "bg-da-form-essen-bg border-da-form-input-line",
        disabled: "bg-da-form-read-dis-bg border-da-form-input-line cursor-not-allowed opacity-60",
      },
      isOpen: {
        true: "border-da-form-input-line-focus shadow-md",
        false: "",
      },
    },
    defaultVariants: { status: "default", isOpen: false },
  }
);

export interface ComboSelectProps extends VariantProps<typeof comboVariants> {
  label?: string;
  hintMessage?: string;
  placeholder?: string;
  displayValue?: string;
  onToggle?: () => void;
  id?: string;
  className?: string;
}

export const ComboSelect = React.forwardRef<HTMLButtonElement, ComboSelectProps>(
  ({ status, label, hintMessage, placeholder = "선택하세요", isOpen, onToggle, displayValue, id, className }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const hasValue = Boolean(displayValue);

    return (
      <div className="flex flex-col gap-[6px] w-full">
        {label && (
          <label htmlFor={selectId} className="text-da-b2 font-bold text-da-t-body">
            {label}
            {status === "essential" && <span className="ml-[2px] text-da-t-attention">*</span>}
          </label>
        )}
        <button
          type="button"
          id={selectId}
          ref={ref}
          onClick={status !== "disabled" ? onToggle : undefined}
          className={cn(comboVariants({ status, isOpen }), "text-left", className)}
        >
          <span className={cn("flex-1 truncate", !hasValue && "text-da-t-placeholder")}>
            {hasValue ? displayValue : placeholder}
          </span>
          <Icon name="arrow-down" size="sm" className={cn(isOpen && "rotate-180 transition-transform")} />
        </button>
        {hintMessage && (
          <p className={cn("text-da-b4", status === "error" ? "text-da-t-attention" : "text-da-t-discription")}>
            {hintMessage}
          </p>
        )}
      </div>
    );
  }
);

ComboSelect.displayName = "ComboSelect";
export default ComboSelect;