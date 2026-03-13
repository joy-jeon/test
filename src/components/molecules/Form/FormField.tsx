import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * FormField 레이아웃 정의 (퍼블리싱 가이드)
 */
const formFieldVariants = cva("flex w-full", {
  variants: {
    layout: {
      col: "flex-col gap-[6px]",
      row: "flex-row items-center gap-[12px]",
    },
  },
  defaultVariants: {
    layout: "col",
  },
});

interface FormFieldProps extends VariantProps<typeof formFieldVariants> {
  label?: string;
  htmlFor?: string; // HTML 표준 접근성을 위한 ID 연결 통로
  essential?: boolean;
  hintMessage?: string;
  isError?: boolean;
  isFullWidth?: boolean;
  labelWidth?: string; // row 레이아웃용 너비 가이드
  children: ReactNode;
  className?: string;
}

/**
 * FormField Molecule (Publisher Layer)
 * - 구조적 배치(레이아웃)와 라벨/힌트의 스타일링만 담당합니다.
 * - 내부 자식(Input)의 Props를 강제로 변경하는 로직을 배제합니다.
 */
const FormField = ({
  label,
  htmlFor,
  essential,
  hintMessage,
  isError,
  isFullWidth = true,
  layout = "col",
  labelWidth,
  children,
  className,
}: FormFieldProps) => {
  return (
    <div className={cn(formFieldVariants({ layout }), !isFullWidth && "w-auto", className)}>
      {/* Label: 퍼블리싱 정의에 따른 폰트 및 여백 적용 */}
      {label && (
        <label
          htmlFor={htmlFor}
          className={cn(
            "text-da-b2 font-bold text-da-t-body shrink-0",
            layout === "row" && (labelWidth || "w-[100px]")
          )}
        >
          {label}
          {essential && <span className="ml-[2px] text-da-t-attention">*</span>}
        </label>
      )}

      {/* Input & Message Container */}
      <div className={cn("flex flex-col gap-[6px]", layout === "row" ? "flex-1" : "w-full")}>
        {/* Slot: 개발자가 주입한 Atom 컴포넌트가 렌더링되는 구역 */}
        {children}

        {/* Hint/Error Message: 상태별 색상 가이드 적용 */}
        {hintMessage && (
          <p className={cn("text-da-b4", isError ? "text-da-t-attention" : "text-da-t-discription")}>
            {hintMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormField;