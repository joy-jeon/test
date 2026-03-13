import React from "react";
import FormField from "./FormField";
import InputText from "@/components/atoms/Input/InputText";
import ComboSelect from "@/components/atoms/Input/ComboSelect";

const FormFieldPreview = () => {
  return (
    <div className="p-[40px] flex flex-col gap-[40px] bg-da-bg1 min-h-screen">
      {/* 1. 세로 레이아웃 검증 */}
      <section>
        <h2 className="text-da-h2 border-b pb-[10px] mb-[24px]">1. Vertical Layout (col)</h2>
        <div className="grid grid-cols-2 gap-[24px] max-w-[800px]">
          <FormField 
            label="아이디" 
            htmlFor="user-id" 
            essential 
            hintMessage="영문/숫자 조합 8자 이상"
          >
            {/* 개발자가 id와 status를 직접 관리 */}
            <InputText id="user-id" placeholder="ID를 입력하세요" status="essential" />
          </FormField>

          <FormField 
            label="비밀번호" 
            htmlFor="user-pw" 
            isError 
            hintMessage="비밀번호가 틀렸습니다."
          >
            <InputText id="user-pw" type="password" status="error" defaultValue="1234" />
          </FormField>
        </div>
      </section>

      {/* 2. 가로 레이아웃 및 라벨 너비 검증 */}
      <section>
        <h2 className="text-da-h2 border-b pb-[10px] mb-[24px]">2. Horizontal Layout (row)</h2>
        <div className="flex flex-col gap-[16px] max-w-[600px] p-[24px] rounded-[12px] shadow-sm">
          <FormField label="이름" htmlFor="name" layout="row" labelWidth="w-[80px]" essential>
            <InputText id="name" placeholder="성함 입력" status="essential" />
          </FormField>

          <FormField label="부서명" htmlFor="dept" layout="row" labelWidth="w-[80px]">
            <ComboSelect id="dept" placeholder="부서 선택" />
          </FormField>
          
          <FormField 
            label="이메일" 
            htmlFor="email" 
            layout="row" 
            labelWidth="w-[80px]" 
            isError 
            hintMessage="형식이 올바르지 않습니다."
          >
            <InputText id="email" status="error" placeholder="example@lg.com" />
          </FormField>
        </div>
      </section>

      {/* 3. 복합 필드 정렬 검증 */}
      <section>
        <h2 className="text-da-h2 border-b pb-[10px] mb-[24px]">3. Alignment Showcase</h2>
        <div className="flex flex-col gap-[12px] max-w-[800px]">
          <FormField label="프로젝트명" layout="row" labelWidth="w-[120px]" essential>
            <InputText status="essential" />
          </FormField>
          <FormField label="참여인원수" layout="row" labelWidth="w-[120px]" hintMessage="숫자만 입력 가능">
            <InputText type="number" />
          </FormField>
          <FormField label="진행상태" layout="row" labelWidth="w-[120px]">
            <ComboSelect placeholder="상태 선택" />
          </FormField>
        </div>
      </section>
    </div>
  );
};

export default FormFieldPreview;