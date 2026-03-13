import React, { useState } from "react";
import { ComboField } from "./Combo"; // ComboField (Molecule) 사용
import { ComboListOption } from "./ComboList";

const SAMPLE_OPTIONS: ComboListOption[] = [
  { label: "사과", value: "apple" },
  { label: "바나나", value: "banana" },
  { label: "포도", value: "grape" },
  { label: "비활성 항목", value: "disabled", disabled: true },
];

const STATUS_CONFIGS = [
  { label: "Default 상태", status: "default" },
  { label: "필수(Essential) 상태", status: "essential" },
  { label: "에러(Error) 상태", status: "error" },
  { label: "비활성(Disabled) 상태", status: "disabled" },
] as const;

const ComboPreview = () => {
  // 각 케이스별 선택 값 관리
  const [statusValues, setStatusValues] = useState<Record<string, string[]>>({
    default: [],
    essential: ["apple"],
    error: [],
    disabled: [],
  });

  const [checkboxValue, setCheckboxValue] = useState<string[]>(["banana", "grape"]);

  return (
    <div className="p-[40px] flex flex-col gap-[48px] bg-da-bg1 min-h-screen">
      <div>
        <h2 className="text-da-h2 font-bold mb-[8px]">ComboField Showcase (Checkmark Default)</h2>
        <p className="text-da-b3 text-da-t-discription">
          기본 옵션 레이어는 <b>체크마크(Checkmark) 타입</b>으로 동작하며, 단일 선택에 최적화되어 있습니다.
        </p>
      </div>

      {/* 1. 상태별 체크마크 타입 Showcase (요청하신 부분) */}
      <section className="flex flex-col gap-[20px]">
        <h3 className="text-da-b1 font-bold">1. Status Showcase (Checkmark Type)</h3>
        <div className="grid grid-cols-2 gap-[32px] max-w-[800px]">
          {STATUS_CONFIGS.map(({ label, status }) => (
            <ComboField
              key={status}
              label={label}
              status={status}
              variant="checkmark" // 모든 기본 상태를 체크마크 타입으로 설정
              options={SAMPLE_OPTIONS}
              value={statusValues[status]}
              onChange={(next) => setStatusValues((prev) => ({ ...prev, [status]: next }))}
              placeholder="항목을 선택하세요"
            />
          ))}
        </div>
      </section>

      {/* 2. 체크박스 타입 (비교용) */}
      <section className="flex flex-col gap-[20px]">
        <h3 className="text-da-b1 font-bold">2. Checkbox Type Showcase (Multi-select)</h3>
        <div className="max-w-[384px]">
          <ComboField
            label="다중 선택 체크박스"
            variant="checkbox" // 명시적 체크박스 타입 설정
            options={SAMPLE_OPTIONS}
            value={checkboxValue}
            onChange={setCheckboxValue}
            placeholder="여러 개 선택 가능합니다"
            hintMessage="체크박스 타입은 선택 시 드롭다운이 닫히지 않습니다."
          />
        </div>
      </section>

      
    </div>
  );
};

export default ComboPreview;