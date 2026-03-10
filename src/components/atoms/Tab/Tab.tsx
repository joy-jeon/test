// src/components/atoms/Tab/Tab.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils' // 프로젝트의 class-merge 유틸리티

const tabVariants = cva(
  "group relative flex items-center justify-center gap-da-xsm transition-all duration-200 focus:outline-none",
  {
    variants: {
      active: {
        true: "text-da-primary",
        false: "text-da-t-body hover:text-da-primary",
      },
      disabled: {
        true: "cursor-not-allowed text-da-t-disabled",
        false: "cursor-pointer",
      },
      size: {
        md: "px-da-sm py-da-xsm text-da-b2",
        sm: "px-da-xsm py-1 text-da-b3",
      }
    },
    compoundVariants: [
      {
        active: false,
        disabled: false,
        className: "hover:text-da-primary"
      }
    ],
    defaultVariants: {
      active: false,
      disabled: false,
      size: "md",
    }
  }
)

interface TabProps extends VariantProps<typeof tabVariants> {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Tab({ label, icon, active, disabled, size, onClick, className }: TabProps) {
  return (
    <button
      type="button"
      disabled={disabled ?? false}
      onClick={!disabled ? onClick : undefined}
      className={cn(tabVariants({ active, disabled, size }), className)}
    >
      {/* Icon: currentColor 상속을 위해 별도 색상 지정 없이 렌더링 */}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      
      <span className="font-bold whitespace-nowrap">{label}</span>

      {/* Active Indicator (Underline) */}
      {active && (
        <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-da-primary" />
      )}
    </button>
  )
}