import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => clsx(inputs);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 truncate font-bold transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-Btn-Btn-Disable disabled:text-T-Disabled",
  {
    variants: {
      variant: {
        primarySolid:
          "rounded-[8px] min-w-[78px] bg-Btn-Gray text-White hover:bg-Btn-Gray-Hover focus-visible:bg-Btn-Gray-Focus disabled:bg-Btn-Btn-Disable disabled:text-T-Disabled disabled:hover:bg-Btn-Btn-Disable disabled:focus-visible:bg-Btn-Btn-Disable",
        primaryLine:
          "rounded-[8px] min-w-[78px] border border-Btn-Btn-Line bg-White text-T-Title hover:bg-Btn-White-Hover focus-visible:border-Btn-Btn-Line-Focus",
        secondarySolid:
            "rounded-[16px] min-w-[78px] text-White  bg-Primary hover:bg-Btn-Purple-Hover focus-visible:bg-Btn-Purple-Focus",
        secondaryLine:
          "rounded-[16px] min-w-[78px] text-T-Title shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:from-Ani-Ani3 hover:to-Ani-Ani2 focus-visible:from-Btn-Purple focus-visible:to-Ani-Ani2",
        generate:
          "min-w-[104px] text-White bg-gradient-to-r from-Btn-Purple to-Ani-Ani2 hover:from-Ani-Ani3 hover:to-Ani-Ani2 focus-visible:from-Btn-Purple focus-visible:to-Ani-Ani2",
      },
      size: {
        sm: "h-[32px] px-[12px] text-[length:theme(fontSize.B4)]",
        md: "h-[40px] px-[16px] text-[length:theme(fontSize.B3)]",
        generateSm: "h-[32px] rounded-[8px] px-[12px] text-[length:theme(fontSize.B2)]",
        generateMd: "h-[60px] rounded-[16px] px-[24px] text-[length:theme(fontSize.H3)]",
        generateLg: "h-[80px] rounded-[999px] px-[60px] text-[length:theme(fontSize.H1)]",
      },
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
        {children && <span className="truncate min-w-0 block">{children}</span>}
        {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
