import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// 1. 크기 규격 정의 (디자인 가이드 기준)
const iconVariants = cva("shrink-0 leading-none", {
  variants: {
    size: {
      24: "w-6 h-6",
      32: "w-8 h-8",
      60: "w-[60px] h-[60px]",
    },
  },
  defaultVariants: {
    size: 24,
  },
});

// 2. 아이콘 이름 타입 정의 (이미지에 있는 것들 위주로 예시)
export type IconName = 
  | "arrow-up" | "arrow-down" | "plus" | "minus" | "search" | "close" | "home" | "settings"
  | "file-star" | "sparkle"; // 그라데이션 아이콘 포함

interface IconProps extends React.SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
  name: IconName;
}

const Icon = ({ name, size, className, ...props }: IconProps) => {
  return (
    <svg
      className={cn(iconVariants({ size, className }))}
      fill="none"
      stroke="currentColor" // 일반 아이콘은 currentColor 사용
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24" // 기본 viewBox, 크기에 따라 내부에서 조정 가능
      {...props}
    >
      {/* 3. 아이콘 이름에 따른 경로 매핑 */}
      {renderPath(name)}
    </svg>
  );
};

// 4. 경로 렌더링 함수 (피그마에서 SVG 코드를 복사해 넣으세요)
const renderPath = (name: IconName) => {
  switch (name) {
    case "plus":
      return <path d="M12 5v14M5 12h14" />;
    case "home":
      return <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />;
    
    // 그라데이션이 필요한 특수 아이콘 (icon60)
    case "file-star":
      return (
        <>
          <defs>
            <linearGradient id="grad-file" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B61FF" />
              <stop offset="100%" stopColor="#E539B4" />
            </linearGradient>
          </defs>
          <path d="..." fill="url(#grad-file)" stroke="none" />
        </>
      );
    default:
      return null;
  }
};

export { Icon };