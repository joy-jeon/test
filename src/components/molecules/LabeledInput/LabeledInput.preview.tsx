import React from "react";
import { LabeledInput } from "./LabeledInput";
import InputText from "@/components/atoms/Input/InputText";

/**
 * LabeledInput Preview
 * - Row/Col 레이아웃 검증
 * - 필수값(Required) 표시 검증
 * - 반복 배치 시 상하/좌우 여백(8px) 검증
 */
const LabeledInputPreview = () => {
  return (
    <div className="flex flex-col gap-da-space-lg p-[32px] bg-da-bg1 min-h-screen">
      
      {/* 1. Row Layout Section */}
      <section className="flex flex-col gap-[16px]">
        <h2 className="text-da-h2 text-da-t-title border-b border-da-divider-content-line pb-[8px]">
          Row Layout (Default)
        </h2>
        <p className="text-da-b3 text-da-t-discription">
          라벨과 인풋이 가로로 배치되며, 요소 간 간격은 4px입니다. 반복 시 부모 컨테이너의 gap-8px로 제어합니다.
        </p>
        
        {/* 반복 배치 컨테이너 */}
        <div className="flex flex-col gap-[8px] max-w-[500px] p-[16px] bg-da-white border border-da-divider-content-line">
          <LabeledInput label="사용자 아이디" layout="row" required>
          <InputText placeholder="텍스트를 입력하세요" status="default" />
          </LabeledInput>
          
          <LabeledInput label="비밀번호" layout="row" required>
            <input 
              type="password" 
              className="w-full h-[40px] px-[12px] border border-da-form-input-line focus:border-da-form-input-line-focus outline-none" 
              placeholder="비밀번호를 입력하세요" 
            />
          </LabeledInput>

          <LabeledInput label="비고 (선택)" layout="row">
            <input 
              type="text" 
              className="w-full h-[40px] px-[12px] border border-da-form-input-line focus:border-da-form-input-line-focus outline-none" 
              placeholder="추가 정보를 입력하세요" 
            />
          </LabeledInput>
        </div>
      </section>

      {/* 2. Column Layout Section */}
      <section className="flex flex-col gap-[16px]">
        <h2 className="text-da-h2 text-da-t-title border-b border-da-divider-content-line pb-[8px]">
          Column Layout
        </h2>
        <p className="text-da-b3 text-da-t-discription">
          라벨이 상단에 위치하며, 인풋과 4px의 수직 간격을 가집니다.
        </p>
        
        <div className="flex flex-col gap-[8px] max-w-[500px] p-[16px] bg-da-white border border-da-divider-content-line">
          <LabeledInput label="문의 제목" layout="col" required>
            <input 
              type="text" 
              className="w-full h-[40px] px-[12px] border border-da-form-input-line focus:border-da-form-input-line-focus outline-none" 
              placeholder="제목을 입력해주세요" 
            />
          </LabeledInput>

          <LabeledInput label="상세 내용" layout="col">
            <textarea 
              className="w-full h-[120px] p-[12px] border border-da-form-input-line focus:border-da-form-input-line-focus outline-none resize-none" 
              placeholder="내용을 입력해주세요" 
            />
          </LabeledInput>
        </div>
      </section>

      {/* 3. Grid 조합 검증 (Layout Responsibility) */}
      <section className="flex flex-col gap-[16px]">
        <h2 className="text-da-h2 text-da-t-title border-b border-da-divider-content-line pb-[8px]">
          Grid Integration
        </h2>
        <p className="text-da-b3 text-da-t-discription">
          부모의 Grid 시스템에 따라 유연하게 너비가 조절되는지 확인합니다.
        </p>
        
        <div className="grid grid-cols-2 gap-[16px] p-[16px] bg-da-white border border-da-divider-content-line">
          <LabeledInput label="성(Last Name)" layout="col" required>
            <input className="w-full h-[40px] px-[12px] border border-da-form-input-line" />
          </LabeledInput>
          <LabeledInput label="이름(First Name)" layout="col" required>
            <input className="w-full h-[40px] px-[12px] border border-da-form-input-line" />
          </LabeledInput>
          <LabeledInput label="이메일 주소" layout="col" className="col-span-2">
            <input className="w-full h-[40px] px-[12px] border border-da-form-input-line" />
          </LabeledInput>
        </div>
      </section>

    </div>
  );
};

export default LabeledInputPreview;