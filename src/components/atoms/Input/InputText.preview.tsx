import React from "react";
import FormField from "@/components/molecules/Form/FormField";
import InputText from "./InputText";
import { Icon } from "@/components/atoms/Icon/Icon";

const InputTextPreview = () => {
  return (
    <div className="p-[40px] flex flex-col gap-[32px] bg-da-bg1 min-h-screen">

      <div className="grid grid-cols-2 gap-[24px]">
        {/* Default */}
        <InputText id="inp-default" placeholder="텍스트를 입력하세요" />

        {/* Essential */}
        <InputText id="inp-essential" placeholder="필수 항목입니다" status="essential" />

        {/* Error */}
        <InputText id="inp-error" status="error" defaultValue="잘못된 값" />

        {/* Readonly & Disabled */}
        <InputText id="inp-readonly" status="readonly" defaultValue="readonly content" />

        {/* Icon Slots */}
        <InputText
          id="inp-icon"
          placeholder="좌우 배치 레이아웃 임시용"
          leftContent={<Icon name="clip" tone="gray" />}
          rightContent={<Icon name="close" ghost tone="gray" />}
        />

      </div>
    </div>
  );
};

export default InputTextPreview;