import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const titleVariants = cva(
  "flex items-center gap-x-[8px] text-da-t-title antialiased",
  {
    variants: {
      level: {
        1: "text-da-h1 font-bold", // 32px
        2: "text-[30px] leading-[1.2] font-bold gap-[8px]", // 30px (Token 미정의 수치)
        3: "text-da-h3 font-bold gap-[8px]", // 20px
        4: "text-da-b2 gap-[6px] text-da-t-discription", // 16px
      },
    },
    defaultVariants: {
      level: 1,
    },
  }
);

interface TitleProps extends VariantProps<typeof titleVariants> {
  children: ReactNode;
  leftSlot?: ReactNode; // 왼쪽 버튼 또는 아이콘 영역
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  className?: string;
}

/**
 * Title 컴포넌트: 페이지 및 섹션의 타이틀을 담당한다.
 */
export const Title = ({
  children,
  level,
  leftSlot,
  as: Component = 'h1',
  className,
}: TitleProps) => {
  return (
    <Component className={cn(titleVariants({ level }), className)}>
      {leftSlot && <span className="flex-shrink-0">{leftSlot}</span>}
      <span className="truncate">{children}</span>
    </Component>
  );
};