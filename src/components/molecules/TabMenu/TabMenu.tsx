// src/components/molecules/Tab/TabMenu.tsx
import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { Tab } from '../../atoms/Tab/Tab';

// 1. TabProps에서 상위에서 제어할 props만 제외하고 id를 추가하여 TabItem 정의
type TabProps = ComponentPropsWithoutRef<typeof Tab>;
interface TabItem extends Omit<TabProps, 'selected' | 'onClick'> {
  id: string;
}

interface TabMenuProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  rightElement?: React.ReactNode;
  widthType?: 'fit' | 'full';
  className?: string;
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
    <div data-componet="tablist-wrap" className={cn(
      "relative flex items-end justify-between border-b border-da-divider-content-line w-full",
      className
    )}>
      <nav role="tablist" className={cn(
        "flex items-center gap-[1px]", 
        widthType === 'full' ? "flex-1" : "w-fit"
      )}>
        {items.map(({ id, ...tabProps }) => (
          <Tab
            key={id}
            {...tabProps} // 나머지 label, leftIcon, rightIcon 등을 그대로 전개
            selected={activeId === id}
            onClick={() => onChange(id)}
            className={widthType === 'full' ? "flex-1" : ""}
          />
        ))}
      </nav>

      {rightElement && (
        <div data-componet="tablist-aside" className="flex items-end gap-da-s  py-da-xsm">
          {rightElement}
        </div>
      )}
    </div>
  );
}