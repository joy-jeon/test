// src/components/atoms/Tab/Tab.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 1. 유틸리티 함수 정의 (Button.tsx와 동일하게 유지)
const cv = (...classes: string[]) => classes.join(" ");

// 2. Base 클래스를 변수로 분리하여 그룹화
const TAB_BASE = cv(
  "group",
  "relative",
  "flex",
  "items-center",
  "justify-center",
  
  // Layout & Spacing
  "min-w-[130px]",
  "px-[24px]",
  "h-[40px]",
  "gap-da-space-sm",
  
  // Border & Typography
  "appearance-none",
  "text-da-h3",
  "text-da-t-body",
  
  // Interaction & Transition
  "transition-all",
  "duration-200",
  "hover:border-da-primary"
);

// 3. cva 적용
const tabVariants = cva(TAB_BASE, {
  variants: {
    selected: {
      true: "text-da-t-primary border-b-2 border-da-primary",
      false: "text-da-t-body border-b-2 border-da-white hover:text-da-t-primary hover:border-da-primary",
    },
    disabled: {
      true: "cursor-not-allowed text-da-t-disabled border-b-0 hover:text-da-t-disabled",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  }
});

// Button 컴포넌트의 ICON_SLOT_CLASS 로직 차용
const ICON_SLOT_CLASS = "shrink-0 flex items-center text-inherit transition-colors duration-150";

export interface TabProps extends VariantProps<typeof tabVariants> {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Tab({ 
  label, 
  leftIcon, 
  rightIcon, 
  selected, 
  disabled, 
  onClick, 
  className, 
}: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      data-componet="tab"
      aria-selected={selected ?? false}
      disabled={disabled ?? false}
      onClick={!disabled ? onClick : undefined}
      className={cn(tabVariants({ selected, disabled }), className)}
    >
      {leftIcon && <i className={ICON_SLOT_CLASS} aria-hidden="true">{leftIcon}</i>}
      <span className="font-bold whitespace-nowrap truncate">{label}</span>
      {rightIcon && <i className={ICON_SLOT_CLASS} aria-hidden="true">{rightIcon}</i>}
    </button>
  );
}