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
  "gap-2",
  "truncate",
  "font-bold",
  "transition-colors",
  "duration-150",
  "focus-visible:outline-none",
  "disabled:cursor-not-allowed",
  "disabled:border-transparent",
  "disabled:bg-Btn-Disable",
  "disabled:text-T-Disabled"
);

const VARIANT_CLASSES = {
  primarySolid: cx(
    "min-w-[78px]",
    "rounded-[8px]",
    "text-White",
    "bg-Btn-Gray",
    "hover:bg-Btn-Gray-Hover",
    "focus-visible:bg-Btn-Gray-Focus",
    "active:bg-Btn-Gray-Focus",
  ),
  primaryLine: cv(
    "min-w-[78px]",
    "rounded-[8px]",
    "border",
    "border-Btn-Line",
    "bg-White",
    "text-T-Title",
    "hover:bg-Btn-White-Hover",
    "focus-visible:border-Btn-Line-Focus",
    "active:border-Btn-Line-Focus",
    
    
  ),
  secondarySolid: cv(
    "min-w-[78px]",
    "rounded-[16px]",
    "bg-Primary",
    "text-White",
    "hover:bg-Btn-Purple-Hover",
    "focus-visible:bg-Btn-Purple-Focus",
    "active:bg-Btn-Purple-Focus"
  ),
  secondaryLine: cv(
    "min-w-[78px]",
    "rounded-[16px]",
    "text-T-Title",
    "hover:from-Ani3",
    "hover:to-Ani2",
    "focus-visible:from-Btn-Purple",
    "focus-visible:to-Ani2",
    "active:from-Btn-Purple",
    "active:to-Ani2",
    "disabled:bg-Btn-Disable",
    "disabled:text-T-Disabled"
  ),
  icon: cx(
    "min-w-0",
    "rounded-[8px]",
    "bg-transparent",
    "text-White",
    "focus-visible:bg-Icon-Gray-Hover",
    "active:bg-Icon-Gray-Hover",
    "disabled:text-Icon-Gray-Disable",
    "disabled:bg-transparent",
  ),
  iconSolid: cx(
    "min-w-0",
    "rounded-[8px]",
    "px-[4px]",
    "px-0",
    "bg-Btn-Gray",
    "text-White",
    "hover:bg-Btn-Gray-Hover",
    "focus-visible:bg-Btn-Gray-Focus",
    "active:bg-Btn-Gray-Focus",
    "disabled:bg-Btn-Disable",
    "disabled:text-T-Disabled",
    "disabled:hover:bg-Btn-Disable",
    "disabled:focus-visible:bg-Btn-Disable"
  ),
  iconLine: cx(
    "min-w-0",
    "rounded-[8px]",
    "px-[4px]",
    "border",
    "border-Btn-Line",
    "bg-White",
    "text-Icon-Gray",
    "hover:bg-Btn-White-Hover",
    "hover:border-Btn-Line-Focus",
    "focus-visible:bg-White",
    "focus-visible:border-Btn-Line-Focus",
    "active:bg-White",
    "active:border-Btn-Line-Focus",
    "disabled:bg-Btn-Disable",
    "disabled:text-T-Disabled",
    "disabled:hover:bg-Btn-Disable",
    "disabled:focus-visible:bg-Btn-Disable"
  ),
  generate: cv(
    "min-w-[104px]",
    "text-White",
    "bg-[linear-gradient(121.34272596785691deg,_rgb(104,122,230)_5.8808%,_rgb(156,91,203)_51.337%,_rgb(208,59,175)_96.792%)]",
    "hover:bg-[linear-gradient(121.34272596785691deg,_rgb(156,168,255)_5.8808%,_rgb(216,103,191)_96.792%)]",
    "focus-visible:bg-[linear-gradient(121.34272596785691deg,_rgb(74,94,218)_5.8808%,_rgb(255,0,199)_96.792%)]",
    "active:bg-[linear-gradient(121.34272596785691deg,_rgb(74,94,218)_5.8808%,_rgb(255,0,199)_96.792%)]",
    "disabled:bg-none",
    "disabled:bg-Btn-Disable",
  ),
} as const;

const SIZE_CLASSES = {
  sm: "h-[32px] px-[12px] text-[length:theme(fontSize.B4)]",
  md: "h-[40px] px-[16px] text-[length:theme(fontSize.B3)]",
  iconSm: "h-[16px] rounded-0 px-0",
  iconMd: "h-[32px] rounded-[8px] px-[4px]",
  generateSm: "h-[32px] rounded-[8px] px-[12px] text-[length:theme(fontSize.B2)]",
  generateMd: "h-[60px] rounded-[16px] px-[24px] text-[length:theme(fontSize.H3)]",
  generateLg: "h-[80px] rounded-[999px] px-[60px] text-[length:theme(fontSize.H1)]",
} as const;

const ICON_SLOT_CLASS = cv(
  "shrink-0",
  "flex",
  "items-center",
  "text-[var(--button-icon-color)]",
  "transition-colors",
  "duration-150",
  "group-hover:text-[var(--button-icon-hover-color)]",
  "group-active:text-[var(--button-icon-active-color)]"
);

const buttonVariants = cva(
  BUTTON_BASE,
  {
    variants: {
      variant: VARIANT_CLASSES,
      size: SIZE_CLASSES,
    },
    defaultVariants: {
      variant: "primarySolid",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconColor?: string;
  iconHoverColor?: string;
  iconActiveColor?: string;
}

const variantIconColorPreset: Record<
  NonNullable<ButtonProps["variant"]>,
  { base: string; hover: string; active: string }
> = {
  primarySolid: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  primaryLine: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  secondarySolid: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  secondaryLine: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  icon: { base: "#74818C", hover: "#212121", active: "#212121" },
  iconSolid: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  iconLine: { base: "currentColor", hover: "currentColor", active: "currentColor" },
  generate: { base: "currentColor", hover: "currentColor", active: "currentColor" },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      iconColor,
      iconHoverColor,
      iconActiveColor,
      style,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = variant ?? "primarySolid";
    const preset = variantIconColorPreset[resolvedVariant];
    const resolvedIconColor = iconColor ?? preset.base;
    const resolvedIconHoverColor = iconHoverColor ?? preset.hover;
    const resolvedIconActiveColor = iconActiveColor ?? preset.active;
    const isChildrenIconOnly =
      !leftIcon && !rightIcon && React.isValidElement(children);

    const iconStyle = {
      ...style,
      "--button-icon-color": resolvedIconColor,
      "--button-icon-hover-color": resolvedIconHoverColor,
      "--button-icon-active-color": resolvedIconActiveColor,
    } as React.CSSProperties;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        style={iconStyle}
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
