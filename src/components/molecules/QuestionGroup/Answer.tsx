import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/atoms/Icon/Icon';

interface AnswerProps {
  children: React.ReactNode;
  className?: string;
}

export const Answer = ({ children, className }: AnswerProps) => {
  return (
    <div data-component="answer-wrap" className="relative flex items-start gap-[12px]">
      {/* 말풍선 본체 */}
      <div 
        data-component="answer-buble"
        className={cn(
          "flex items-center",
          "text-da-b2 text-da-white leading-[1.5]",
          "py-[12px] px-[24px]",
          "rounded-[24px] rounded-tl-0",
          "bg-[linear-gradient(100deg,#687AE6_5.88%,#9C5BCB_51.34%,#D03BAF_96.79%)]",
          "shadow-da-answer-box",
          className
        )}
      >
        <span className="whitespace-pre-line">{children}</span>
      </div>
      {/* AI 아이콘 (별 모양) */}
      <div className="pt-[8px]">
        <Icon name="aiAnswer" ghost={false} size="md" />
      </div>
    </div>
  );
};