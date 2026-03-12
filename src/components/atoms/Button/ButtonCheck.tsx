import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonCheckVariants = cva(
  "inline-flex items-center justify-center transition-all cursor-pointer border select-none outline-none font-bold",
  {
    variants: {
      size: {
        md: "h-[32px] px-[16px] rounded-[999px] text-da-b3",
      },
      status: {
        default: "bg-da-white border-da-btn-line text-da-t-body",
        checked: "bg-da-white border-da-btn-purple text-da-t-primary-deep", 
      },
    },
    defaultVariants: {
      size: "md",
      status: "default",
    },
  }
);

interface ButtonCheckProps extends VariantProps<typeof buttonCheckVariants> {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const ButtonCheck = ({
  id,
  label,
  checked = false,
  onChange,
  size,
  className,
}: ButtonCheckProps) => {
  return (
    <div data-component="buttonCheck" className={cn("inline-block rounded-[20px]", className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only" // 화면에서 숨기지만 스크린 리더 및 포커스는 유지
      />
      <label
        htmlFor={id}
        className={cn(buttonCheckVariants({ size, status: checked ? 'checked' : 'default' }))}
      >
        {label}
      </label>
    </div>
  );
};