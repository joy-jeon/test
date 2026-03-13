import React, { useState } from "react";
import { ComboSelect, ComboSelectProps } from "./ComboSelect";
import { ComboList, ComboListOption, ComboListVariant } from "./ComboList";
import { cn } from "@/lib/utils";

interface ComboFieldProps extends Omit<ComboSelectProps, "isOpen" | "onToggle" | "displayValue"> {
  variant?: ComboListVariant;
  options: ComboListOption[];
  value: string[];
  onChange: (value: string[]) => void;
}

export const ComboField = ({ variant = "checkmark", options, value, onChange, ...selectProps }: ComboFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayLabel = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label)
    .join(", ");

  return (
    <div className="relative w-full">
      <ComboSelect
        {...selectProps}
        isOpen={isOpen}
        displayValue={displayLabel}
        onToggle={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 animate-in fade-in slide-in-from-top-1">
          <ComboList
            variant={variant}
            options={options}
            selected={value}
            onChange={(next) => {
              onChange(next);
              if (variant === "checkmark") setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};