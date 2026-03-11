import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonCheck } from '@/components/atoms/Button/ButtonCheck';
import InputText from "@/components/atoms/Input/InputText";
import { Button } from '@/components/atoms/Button/Button';


interface QuestionOption {
  id: string;
  label: string;
}

interface QuestionItemProps {
  question: string;
  hasBullet?: boolean;
  bulletType?: 'dot' | 'square';
  options: QuestionOption[];
  selectedIds: string[];
  onOptionChange: (id: string, checked: boolean) => void;
  showInput?: boolean;
  inputPlaceholder?: string;
  rightContent?: React.ReactNode;
}

export const QuestionItem = ({
  question,
  hasBullet = true,
  bulletType = 'dot',
  options,
  selectedIds,
  onOptionChange,
  showInput,
  inputPlaceholder = "입력하세요",
  rightContent,
}: QuestionItemProps) => {
  return (
    <section data-component="question-group" className="flex flex-col gap-[12px]">
      <div data-component="question-area-label" className="flex items-start justify-between">
        <div data-component="question-label" className="flex items-center gap-[8px]">
          {hasBullet && (
            <span 
              aria-hidden="true"
              className={cn(
                "inline-block w-[4px] h-[4px] bg-da-t-body shrink-0",
                bulletType === 'dot' ? "rounded-full" : "rounded-none"
              )} 
            />
          )}
          <h3 className="text-da-b2 font-bold text-da-t-body">{question}</h3>
        </div>
        {rightContent && <div className="ml-[16px]">{rightContent}</div>}
      </div>

      <div data-component="question-area-select" className="bg-da-bg2 rounded-[16px] p-[12px] flex flex-col gap-[8px]">
        <div className="flex flex-wrap gap-[8px]">
          {options.map((opt) => (
            <ButtonCheck
              key={opt.id}
              id={opt.id}
              label={opt.label}
              checked={selectedIds.includes(opt.id)}
              onChange={(checked) => onOptionChange(opt.id, checked)}
            />
          ))}
        </div>
        {showInput && <InputText placeholder={inputPlaceholder} />}
      </div>

      <div data-component="question-area-btn" className='flex justify-end'>
        <Button variant="primarySolid">선택완료</Button>
      </div>
    </section>
  );
};

interface QuestionGroupProps {
  children: React.ReactNode;
  maxHeight?: string;
  className?: string;
}

export const QuestionGroup = ({ children, maxHeight = "500px", className }: QuestionGroupProps) => {
  return (
    <div className="bg-white p-[24px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] shadow-da-question-box">
        <div 
        className={cn("flex flex-col gap-[40px] overflow-y-auto pr-[8px]", className)}
        style={{ maxHeight }}
        >
        {children}
        </div>
    </div>
  );
};