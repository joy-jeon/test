import React from "react";
import InputText from "./InputText";
import {Icon} from "@/components/atoms/Icon/Icon";


const InputTextPreview = () => {
  return (
    <div className="p-[40px] flex flex-col gap-[32px] bg-da-bg1 min-h-screen">
      <h2 className="text-da-h2 border-b pb-[10px] mb-[20px]">InputText Status Showcase</h2>

      <div className="grid grid-cols-2 gap-[24px]">
        {/* Default */}
        <InputText label="기본 입력" placeholder="텍스트를 입력하세요" status="default" />

        {/* Essential */}
        <InputText
          label="필수 입력"
          placeholder="필수 항목입니다"
          status="essential"
          hintMessage="필수 입력 항목에 대한 가이드입니다."
        />

        {/* Error */}
        <InputText
          label="에러 상태"
          defaultValue="잘못된 값"
          status="error"
          hintMessage="입력 형식이 올바르지 않습니다."
        />

        {/* Readonly */}
        <InputText label="읽기전용" defaultValue="readonly" status="readonly" />

        {/* Disabled */}
        <InputText label="비활성" defaultValue="수정 불가" status="disabled" />

        {/* Content Slots */}
        <InputText
          label="아이콘 포함 (좌/우) - 임시작업"
          placeholder="검색어를 입력하세요"
          leftContent={
            <Icon name="clip" ghost={false} tone="gray"/>
          }
          rightContent={
            <Icon name="close" ghost={true} tone="gray" />
          }
        />

        {/* Long Text Truncate Test */}
        <InputText
          label="텍스트 생략 테스트 - 임시작업"
          defaultValue="매우 긴 텍스트가 입력되었을 때 레이아웃이 깨지지 않고 정상적으로 말줄임 처리가 되는지 확인하기 위한 샘플 데이터입니다."
          rightContent={<span className="text-da-t-discription text-da-b4">120/200</span>}
        />
      </div>
    </div>
  );
};

export default InputTextPreview;
