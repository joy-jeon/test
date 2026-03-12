import React, { useState } from 'react';
import { QuestionGroup, QuestionItem } from './QuestionGroup';
import { Answer } from './Answer'; 
import { Button } from '@/components/atoms/Button/Button';

export const QuestionGroupPreview = () => {
  const [selectedPurpose, setSelectedPurpose] = useState<string[]>(['purpose-3']);
  const [selectedRegion, setSelectedRegion] = useState<string[]>(['region-1']);

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (id: string, checked: boolean) => {
    setter(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
  };

  return (
    <div className="p-[40px] bg-da-bg1 min-h-screen flex flex-col items-center gap-[40px]">
      
      {/* 채팅 섹션 컨테이너: 이미지의 너비감을 고려하여 max-w 설정 */}
      <div className="w-full max-w-[800px] flex flex-col gap-[24px]">

        {/* 2. 질문 그룹 영역 */}
        
          <QuestionGroup>
            <QuestionItem
              question="이번 프로젝트를 통해 달성하고싶은 최종목적은 무엇인가요?"
              bulletType="dot"
              options={[
                { id: 'purpose-1', label: '신규 사업 발굴' },
                { id: 'purpose-2', label: '기존 사업 확장' },
                { id: 'purpose-3', label: '직접입력' },
              ]}
              selectedIds={selectedPurpose}
              onOptionChange={handleToggle(setSelectedPurpose)}
              showInput={selectedPurpose.includes('purpose-3')}
              inputPlaceholder="입력하세요"
            />

            <QuestionItem
              question="목표고객의 지역 범위를 어떻게 설정하고 있나요?"
              bulletType="dot"
              options={[
                { id: 'region-1', label: '국내' },
                { id: 'region-2', label: '아시아' },
                { id: 'region-3', label: '글로벌' },
                { id: 'region-n', label: '직접입력' },
              ]}
              selectedIds={selectedRegion}
              onOptionChange={handleToggle(setSelectedRegion)}
              showInput={selectedRegion.includes('region-n')}
              inputPlaceholder="입력해 주세요"
            />
          </QuestionGroup>
        

        {/* 3. 하단 액션 영역 (선택완료 버튼) */}
        <div data-component="question-area-btn" className='flex justify-end'>
          <Button variant="primarySolid">선택완료</Button>
        </div>
      </div>

    </div>
  );
};

export default QuestionGroupPreview;