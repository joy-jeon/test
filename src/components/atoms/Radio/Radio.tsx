import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "relative inline-flex items-center justify-center rounded-full border transition-colors duration-150 shrink-0",
  {
    variants: {
      state: {
        unchecked: "bg-da-white border-da-form-input-line",
        checked: "bg-da-primary/10 border-da-primary",
        disabled: "bg-da-form-read-dis-bg border-da-form-input-line cursor-not-allowed",
      },
      size: {
        sm: "w-4 h-4", // 16px
        md: "w-5 h-5", // 20px 기본
      },
    },
    defaultVariants: {
      state: "unchecked",
      size: "md",
    },
  }
);

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">,
    VariantProps<typeof radioVariants> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Radio = ({
  checked = false,
  disabled,
  onChange,
  className,
  size,
  label,
  ...props
}: RadioProps) => {
  const state = disabled ? "disabled" : checked ? "checked" : "unchecked";
  const labelCls = cn(
    "inline-flex items-center gap-2 select-none focus-within:outline focus-within:outline-2 focus-within:outline-da-primary/60 focus-within:outline-offset-2 rounded-[6px]",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  return (
    <label className={labelCls}>
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      <span className={cn(radioVariants({ state, size }), className)}>
        <span
          className={cn(
            "absolute rounded-full bg-da-primary transition-opacity duration-150",
            size === "sm" ? "w-2 h-2" : "w-[10px] h-[10px]",
            checked ? "opacity-100" : "opacity-0",
            disabled && "bg-da-t-disabled"
          )}
        />
      </span>
      {label && <span className={cn("text-da-b2", disabled ? "text-da-t-disabled" : "text-da-t-body")}>{label}</span>}
    </label>
  );
};

export default Radio;
