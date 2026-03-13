import React from "react";
import { cn } from "@/lib/utils";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { Icon } from "@/components/atoms/Icon/Icon";

export type ComboListVariant = "checkbox" | "checkmark";

export type ComboListOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface ComboListProps {
  variant: ComboListVariant;
  options: ComboListOption[];
  selected: string[];
  onChange: (nextSelected: string[]) => void;
  className?: string;
}

export const ComboList = ({ variant, options, selected, onChange, className }: ComboListProps) => {
  const handleToggle = (value: string) => {
    if (variant === "checkbox") {
      const exists = selected.includes(value);
      const next = exists ? selected.filter((v) => v !== value) : [...selected, value];
      onChange(next);
    } else {
      onChange([value]);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-[4px] p-[8px] rounded-[8px] border border-da-form-input-line bg-da-white shadow-da-input-text",
        "max-h-[240px] overflow-y-auto custom-scrollbar",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        const isDisabled = option.disabled;

        return (
          <button
            key={option.value}
            type="button"
            disabled={isDisabled}
            onClick={() => handleToggle(option.value)}
            className={cn(
              "flex items-center justify-between w-full h-[36px] px-[12px] rounded-[6px] text-da-b2 transition-colors duration-150",
              isSelected ? "bg-da-primary/10 text-da-primary" : "bg-transparent text-da-t-body",
              isDisabled && "cursor-not-allowed text-da-t-disabled",
              "hover:bg-da-bg2"
            )}
          >
            <div className="flex items-center gap-[8px] truncate">
              {variant === "checkbox" && (
                <Checkbox checked={isSelected} disabled={isDisabled} size="md" readOnly />
              )}
              <span className="truncate">{option.label}</span>
            </div>
            {variant === "checkmark" && isSelected && (
              <Icon name="checkSmall" size="md" tone="primary" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ComboList;