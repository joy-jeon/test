import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const trackVariants = cva(
  "relative inline-flex items-center rounded-full border transition-colors duration-180 shrink-0",
  {
    variants: {
      state: {
        off: "bg-da-primary border-da-primary",
        on: "bg-da-white border-da-primary",
        disabled: "bg-da-form-read-dis-bg border-da-form-input-line cursor-not-allowed",
      },
      size: {
        md: "w-[32px] h-[20px]", 
      },
    },
    defaultVariants: {
      state: "off",
      size: "md",
    },
  }
);

export interface SwitchToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">,
    VariantProps<typeof trackVariants> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const SwitchToggle = ({
  checked = false,
  disabled,
  onChange,
  className,
  size,
  label,
  ...props
}: SwitchToggleProps) => {
  const state = disabled ? "disabled" : checked ? "on" : "off";
  const labelCls = cn(
    "inline-flex items-center gap-2 select-none focus-within:outline focus-within:outline-2 focus-within:outline-da-primary/60 focus-within:outline-offset-2 rounded-[6px]",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  return (
    <label className={labelCls}>
      <input
        type="checkbox"
        role="switch"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      <span className={cn(trackVariants({ state, size }), className)}>
        <span
          className={cn(
            "absolute rounded-full shadow-sm transition-all duration-180",
            "w-[12px] h-[12px]",
            state === "on" ? "bg-da-primary" : "bg-da-white",
            state === "on" ? "translate-x-[11px]" : "translate-x-0",
            disabled && "bg-da-t-disabled shadow-none"
          )}
          style={{ left: 4, top: 3 }} // 트랙 내부에서 스위치 위치 
        />
      </span>
      {label && <span className={cn("text-da-b2", disabled ? "text-da-t-disabled" : "text-da-t-body")}>{label}</span>}
    </label>
  );
};

export default SwitchToggle;
