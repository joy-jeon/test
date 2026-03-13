import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/atoms/Icon/Icon";

const checkboxVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] border transition-colors duration-150 shrink-0",
  {
    variants: {
      state: {
        unchecked: "bg-da-white border-da-form-input-line",
        checked: "bg-da-primary border-da-primary text-da-white",
        disabled: "bg-da-form-read-dis-bg border-da-form-input-line text-da-t-disabled cursor-not-allowed",
      },
      size: {
        sm: "w-4 h-4", // 16px 유지: 조밀한 리스트용
        md: "w-5 h-5", // 20px 기본 사이즈
      },
    },
    defaultVariants: {
      state: "unchecked",
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">,
    VariantProps<typeof checkboxVariants> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Checkbox = ({
  checked = false,
  disabled,
  onChange,
  className,
  size,
  label,
  ...props
}: CheckboxProps) => {
  const state = disabled ? "disabled" : checked ? "checked" : "unchecked";
  const labelCls = cn(
    "inline-flex items-center gap-[8px] select-none focus-within:outline focus-within:outline-2 focus-within:outline-da-primary/60 focus-within:outline-offset-2 rounded-[6px]",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  return (
    <label className={labelCls}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      <span className={cn(checkboxVariants({ state, size }), className)}>
        {checked && <Icon name="checkSmall" size="sm" tone={disabled ? "disabled" : "white"} />}
      </span>
      {label && <span className={cn("text-da-b2", disabled ? "text-da-t-disabled" : "text-da-t-body")}>{label}</span>}
    </label>
  );
};

export default Checkbox;
