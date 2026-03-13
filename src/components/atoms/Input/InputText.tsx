import React, { InputHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/lib/utils';

/**
 * InputText 컴포넌트의 상태 및 스타일 정의
 * Atom 단위로서 입력 박스의 시각적 상태(Border, Background)만 관리합니다.
 */
const inputTextVariants = cva(
  `flex items-center w-full h-[32px] px-[12px] gap-[8px] 
  text-da-b2 text-da-t-body truncate
  border rounded-[8px] shadow-da-input-text 
  transition-all duration-200 
  placeholder:text-da-t-placeholder`,
  {
    variants: {
      status: {
        default: "bg-da-white border-da-form-input-line",
        error: "bg-da-white border-da-t-attention",
        essential: "bg-da-form-essen-bg border-da-form-input-line ",
        editable: "bg-da-white border-da-primary",
        disabled: "bg-da-form-read-dis-bg border-da-form-input-line cursor-default",
        readonly: "bg-da-form-read-dis-bg border-da-form-input-line cursor-default",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);

interface InputTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputTextVariants> {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, status, leftContent, rightContent, id, ...props }, ref) => {
    const isError = status === "error";
    const isDisabled = status === "disabled" || props.disabled;
    const isReadonly = status === "readonly" || props.readOnly;

    return (
      <div className={cn(inputTextVariants({ status }), className)}>
        {leftContent && <div className="flex-shrink-0">{leftContent}</div>}
        
        <input
          id={id}
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadonly}
          aria-invalid={isError}
          className={cn(
            "flex-1 bg-transparent border-none outline-none p-0 m-0 text-da-b2 text-da-t-body placeholder:text-da-t-placeholder disabled:text-da-t-disabled truncate",
            "focus:ring-0"
          )}
          {...props}
        />

        {rightContent && <div className="flex-shrink-0 flex items-center gap-[4px]">{rightContent}</div>}
      </div>
    );
  }
);

InputText.displayName = "InputText";

export default InputText;