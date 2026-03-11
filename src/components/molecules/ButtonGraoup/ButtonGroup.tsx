import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // tailwind-merge와 clsx 유틸

const buttonGroupVariants = cva(
  "flex items-center", // 공통 속성
  {
    variants: {
      align: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
      gap: {
        none: "gap-0",
        sm: "gap-[8px]",    
        md: "gap-[16px]",    
        lg: "gap-[24px]",    
      },
      // 핵심: width 속성 추가
      width: {
        full: "w-full",      // width: 100% (Block 방식)
        fit: "w-fit",       // width: fit-content (Inline-like 방식)
      },
      direction: {
        row: "flex-row",
        column: "flex-col",
      }
    },
    defaultVariants: {
      align: "left",
      gap: "sm",
      width: "full", // 기본은 100%로 설정
      direction: "row",
    },
  }
);

interface ButtonGroupProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof buttonGroupVariants> {
  children: React.ReactNode;
}

export default function ButtonGroup({ 
  align, 
  gap, 
  width,
  direction, 
  className, 
  children, 
  ...props 
}: ButtonGroupProps) {
  return (
    <div
      data-component="button-wrap" 
      className={cn(buttonGroupVariants({ align, gap, width, direction }), className)} 
      {...props}
    >
      {children}
    </div>
  );
}