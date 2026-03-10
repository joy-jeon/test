// src/components/molecules/Tab/TabMenu.tsx
import { cn } from '@/lib/utils'
import { Tab } from '../../atoms/Tab/Tab'

interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface TabMenuProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  rightElement?: React.ReactNode // 우측 코멘트/버튼 영역
  widthType?: 'fit' | 'full'
  className?: string
}

export function TabMenu({ 
  items, 
  activeId, 
  onChange, 
  rightElement, 
  widthType = 'fit',
  className 
}: TabMenuProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-between border-b border-da-divider-content-line w-full",
      className
    )}>
      <nav className={cn(
        "flex items-center gap-da-md", // 디자인 토큰 md(24px) 간격 적용
        widthType === 'full' ? "flex-1" : "w-fit"
      )}>
        {items.map((item) => (
          <Tab
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={activeId === item.id}
            disabled={item.disabled}
            onClick={() => onChange(item.id)}
            className={widthType === 'full' ? "flex-1" : ""}
          />
        ))}
      </nav>

      {/* 우측 슬롯 영역: 코멘트나 과제등록 버튼 등 배치 */}
      {rightElement && (
        <div className="flex items-center gap-da-sm ml-da-md py-da-xsm">
          {rightElement}
        </div>
      )}
    </div>
  )
}