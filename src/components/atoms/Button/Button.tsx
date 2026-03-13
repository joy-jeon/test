import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => clsx(inputs);
const cv = (...classes: string[]) => classes.join(" ");
const cx = (...parts: (string | string[])[]) => cv(...parts.flat());

const BUTTON_BASE = cv(
  "group",
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-[6px]",
  "flex-shrink-0",
  "truncate",
  "font-bold",
  "transition-all",
  "duration-300",
  "ease-in-out",
  "focus-visible:outline-none",
  // "read-only:cursor-not-allowed",
  "disabled:cursor-not-allowed",
  "disabled:border-transparent",
  "disabled:bg-da-btn-disable",
  "disabled:text-da-t-disabled"
);

const VARIANT_CLASSES = {
  primarySolid: cx(
    "min-w-[78px]",
    "rounded-[8px]",
    "text-da-white",
    "bg-da-btn-gray",
    "hover:bg-da-btn-gray-hover",
    "focus-visible:bg-da-btn-gray-focus",
    "active:bg-da-btn-gray-focus",
  ),
  primaryLine: cv(
    "min-w-[78px]",
    "rounded-[8px]",
    "border",
    "border-Btn-Line",
    "bg-da-white",
    "text-da-t-title",
    "hover:bg-da-btn-white-hover",
    "focus-visible:border-da-btn-line-focus",
    "active:border-da-btn-line-focus",
    
    
  ),
  secondarySolid: cv(
    "min-w-[78px]",
    "rounded-[8px]",
    "bg-da-primary",
    "text-da-white",
    "hover:bg-da-btn-purple-hover",
    "focus-visible:bg-da-btn-purple-focus",
    "active:bg-da-btn-purple-focus"
  ),
  secondaryLine: cv(
    "min-w-[78px]",
    "rounded-[8px]",
    "border",
    "border-Btn-Line",
    "bg-da-white",
    "text-da-t-title",
    "hover:bg-da-btn-white-hover",
    "hover:border-da-btn-line-focus",
    "focus-visible:bg-da-white",
    "focus-visible:border-da-btn-line-focus",
    "active:bg-da-white",
    "active:border-da-btn-line-focus",
    "disabled:bg-da-btn-disable",
    "disabled:text-da-t-disabled"
  ),
  icon: cx(
    "min-w-0",
    "rounded-[8px]",
    "bg-transparent",
    "text-da-white",
    "focus-visible:bg-da-icon-gray-hover",
    "active:bg-da-icon-gray-hover",
    "disabled:text-da-icon-gray-disable",
    "disabled:bg-transparent",
  ),
  iconSolid: cx(
    "min-w-0",
    "rounded-[8px]",
    "px-[4px]",
    "px-0",
    "bg-da-btn-gray",
    "text-da-white",
    "hover:bg-da-btn-gray-hover",
    "focus-visible:bg-da-btn-gray-focus",
    "active:bg-da-btn-gray-focus",
    "disabled:bg-da-btn-disable",
    "disabled:text-da-t-disabled",
    "disabled:hover:bg-da-btn-disable",
    "disabled:focus-visible:bg-da-btn-disable"
  ),
  iconLine: cx(
    "min-w-0",
    "rounded-[8px]",
    "px-[4px]",
    "border",
    "border-Btn-Line",
    "bg-da-white",
    "text-da-icon-gray",
    "hover:bg-da-btn-white-hover",
    "hover:border-da-btn-line-focus",
    "group-hover:text-da-icon-gray-hover",
    "group-active:text-da-icon-gray-hover",
    "focus-visible:bg-da-white",
    "focus-visible:border-da-btn-line-focus",
    "active:bg-da-white",
    "active:border-da-btn-line-focus",
    "disabled:bg-da-btn-disable",
    "disabled:text-da-t-disabled",
    "disabled:hover:bg-da-btn-disable",
    "disabled:focus-visible:bg-da-btn-disable"
  ),
  generate: cv(
    "min-w-[104px]",
    "text-da-white",
    "bg-[linear-gradient(121.34272596785691deg,_rgb(104,122,230)_5.8808%,_rgb(156,91,203)_51.337%,_rgb(208,59,175)_96.792%)]",
    "hover:bg-[linear-gradient(121.34272596785691deg,_rgb(156,168,255)_5.8808%,_rgb(216,103,191)_96.792%)]",
    "focus-visible:bg-[linear-gradient(121.34272596785691deg,_rgb(74,94,218)_5.8808%,_rgb(255,0,199)_96.792%)]",
    "active:bg-[linear-gradient(121.34272596785691deg,_rgb(74,94,218)_5.8808%,_rgb(255,0,199)_96.792%)]",
    "disabled:bg-none",
    "disabled:bg-da-btn-disable",
  ),
} as const;

const SIZE_CLASSES = {
  sm: "h-[32px] px-[12px] text-da-b4",
  md: "h-[40px] px-[24px] text-da-b1",
  iconSm: "h-[16px] rounded-0 px-0",
  iconMd: "h-[32px] rounded-[8px] px-[4px]",
  generateSm: "h-[32px] rounded-[8px] px-[12px] text-da-b2",
  generateMd: "h-[40px] rounded-[8px] px-[12px] text-da-b1",
  generateLg: "h-[60px] rounded-[16px] px-[24px] text-da-h3",
  generateXlg: "h-[80px] rounded-[999px] px-[60px] text-da-h1",
} as const;

const ICON_SLOT_CLASS = cv(
  "shrink-0",
  "flex",
  "items-center",
  "text-inherit",
  "transition-colors",
  "duration-150"
);

const buttonVariants = cva(BUTTON_BASE, {
  variants: {
    variant: VARIANT_CLASSES,
    size: SIZE_CLASSES,
  },
  defaultVariants: {
    variant: "primarySolid",
    size: "sm",
  },
});

type ButtonVariant = keyof typeof VARIANT_CLASSES;

interface BaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export type ButtonProps =
  | (BaseProps & { 
      variant: "generate"; 
      leftIcon: React.ReactNode; // 필수(Required)
      rightIcon?: never;         // 금지(Forbidden)
    })
  | (BaseProps & { 
      variant?: Exclude<ButtonVariant, "generate">; 
      leftIcon?: React.ReactNode; 
      rightIcon?: React.ReactNode; 
    });

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const isChildrenIconOnly =
      !leftIcon && !rightIcon && React.isValidElement(children);

    return (
      <button
        data-component="button"
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        style={style}
        {...props}
      >
        {leftIcon && (
          <span className={ICON_SLOT_CLASS}>
            {leftIcon}
          </span>
        )}
        {children &&
          (isChildrenIconOnly ? (
            <span className={ICON_SLOT_CLASS}>{children}</span>
          ) : (
            <span className="truncate min-w-0 block">{children}</span>
          ))}
        {rightIcon && (
          <span className={ICON_SLOT_CLASS}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
