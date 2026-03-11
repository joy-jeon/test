import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/atoms/Icon/Icon';

interface AnswerProps {
  children: React.ReactNode;
  className?: string;
}

export const Answer = ({ children, className }: AnswerProps) => {
  return (
    <div data-component="answer-wrap" className="relative flex gap=[12px] max-w-[70%]">
      {/* 말풍선 본체 */}
      <div 
        data-component="answer-buble"
        className={cn(
          "flex items-center",
          "text-white text-da-b2 leading-[1.5]",
          "py-[12px] px-[24px]",
          "rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] rounded-tl-0",
          "bg-[linear-gradient(100deg,#687AE6_5.88%,#9C5BCB_51.34%,#D03BAF_96.79%)]",
          "shadow-da-answer-box",
          className
        )}
      >
        <span className="whitespace-pre-wrap">{children}</span>
      </div>
      <Icon name="aiAnswer" ghost={false} size="md" />
    </div>
  );
};