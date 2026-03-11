import React, { useState } from 'react';
import { ButtonCheck } from './ButtonCheck';

export const ButtonCheckPreview = () => {
  // 인터랙티브 상태 관리를 위한 훅
  const [checkedItems, setCheckedItems] = useState<string[]>(['checked-1']);

  const handleToggle = (id: string, checked: boolean) => {
    setCheckedItems((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <div className="p-[40px] flex flex-col gap-[40px] bg-da-bg1 min-h-screen">
      {/* 1. 상태별 정적 노출 (Visual Specs) */}
      <section className="flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-bold text-da-t-title border-b border-da-divider-content-line pb-[10px]">
          1. ButtonCheck States
        </h2>
        <div className="flex flex-wrap gap-[16px] items-end">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[12px] text-da-t-discription">Default</span>
            <ButtonCheck id="state-default" label="미선택 상태" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[12px] text-da-t-discription">Checked</span>
            <ButtonCheck id="state-checked" label="선택 완료" checked={true} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[12px] text-da-t-discription">Long Text</span>
            <ButtonCheck id="state-long" label="텍스트가 길어지는 경우의 버튼 너비 확인" />
          </div>
        </div>
      </section>

      {/* 2. 인터랙티브 테스트 (Interaction) */}
      <section className="flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-bold text-da-t-title border-b border-da-divider-content-line pb-[10px]">
          2. Interactive Group
        </h2>
        <div className="p-[24px] bg-da-white border border-da-form-input-line rounded-[12px] flex flex-wrap gap-[8px]">
          {['옵션 A', '옵션 B', '옵션 C'].map((label, idx) => {
            const id = `interactive-${idx}`;
            return (
              <ButtonCheck
                key={id}
                id={id}
                label={label}
                checked={checkedItems.includes(id)}
                onChange={(checked) => handleToggle(id, checked)}
              />
            );
          })}
        </div>
      </section>

     
    </div>
  );
};

export default ButtonCheckPreview;