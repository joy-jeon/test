import React, { useState } from 'react';
import { QuestionGroup, QuestionItem } from './QuestionGroup';
import { Icon } from '@/components/atoms/Icon/Icon'; //

export const QuestionGroupPreview = () => {
  // 1. 첫 번째 질문 상태 관리 (다중 선택)
  const [selectedPurpose, setSelectedPurpose] = useState<string[]>(['purpose-3']);
  
  // 2. 두 번째 질문 상태 관리 (단일 선택 시뮬레이션)
  const [selectedRegion, setSelectedRegion] = useState<string[]>(['region-1']);

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (id: string, checked: boolean) => {
    setter(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
  };

  return (
    <div className="p-[40px] bg-da-bg1 min-h-screen flex flex-col gap-[60px]">
      
      {/* 케이스 1: 기본 설문 그룹 (스크롤 제한 없음) */}
      <section className="flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-bold text-da-t-title border-b border-da-divider-content-line pb-[10px]">
          1. Default Question Set
        </h2>
        <QuestionGroup maxHeight="none">
        {/* 질문 1: 직접 입력 연동 케이스 */}
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
            inputPlaceholder="구체적인 목적을 입력해 주세요"
        />

        {/* 질문 2: 우측 확장 콘텐츠(도움말) 케이스 */}
        <QuestionItem
            question="목표고객의 지역 범위를 어떻게 설정하고 있나요?"
            bulletType="square"
            options={[
            { id: 'region-1', label: '국내' },
            { id: 'region-2', label: '아시아' },
            { id: 'region-3', label: '글로벌' },
            { id: 'region-4', label: '직접입력' },
            ]}
            selectedIds={selectedRegion}
            onOptionChange={handleToggle(setSelectedRegion)}
            showInput={selectedRegion.includes('region-4')}
            inputPlaceholder="입력해 주세요"
            rightContent={
            <button type="button" className="flex items-center gap-[4px] text-da-t-primary text-[14px] hover:underline">
                <Icon name="info" size="md" />
                <span>임시컨텐츠</span>
            </button>
            }
        />
        </QuestionGroup>
      </section>

      {/* 케이스 2: 많은 질문이 포함된 스크롤 그룹 */}
      <section className="flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-bold text-da-t-title border-b border-da-divider-content-line pb-[10px]">
          2. Scrollable Group (maxHeight: 500px)
        </h2>
        <QuestionGroup maxHeight="500px" className="pr-[16px]">
        {[1, 2, 3, 4, 5].map((num) => (
            <QuestionItem
            key={num}
            question={`질문 리스트 항목 #${num} - 스크롤 테스트를 위한 반복 질문입니다.`}
            options={[
                { id: `q${num}-1`, label: '매우 그렇다' },
                { id: `q${num}-2`, label: '그렇다' },
                { id: `q${num}-3`, label: '보통이다' },
            ]}
            selectedIds={[]}
            onOptionChange={() => {}}
            />
        ))}
        </QuestionGroup>
      </section>

    </div>
  );
};

export default QuestionGroupPreview;