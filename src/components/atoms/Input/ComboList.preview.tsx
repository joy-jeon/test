import React, { useState } from "react";
import ComboList, { ComboListOption } from "./ComboList";

const OPTIONS: ComboListOption[] = [
  { label: "item01", value: "item01" },
  { label: "item02", value: "item02" },
  { label: "item03", value: "item03" },
];

const ComboListPreview = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>(["item01"]);
  const [markedValues, setMarkedValues] = useState<string[]>(["item02"]);

  return (
    <div className="p-[40px] flex flex-col gap-da-space-md bg-da-bg1 min-h-screen">
      <h2 className="text-da-h2 border-b pb-[10px] mb-[12px]">ComboList Types</h2>

      <div className="grid grid-cols-2 gap-da-space-md max-w-[720px]">
        <div className="flex flex-col gap-[12px]">
          <p className="text-da-b2 text-da-t-body">체크박스 타입</p>
          <ComboList variant="checkbox" options={OPTIONS} selected={checkedValues} onChange={setCheckedValues} />
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-da-b2 text-da-t-body">체크마크 타입</p>
          <ComboList variant="checkmark" options={OPTIONS} selected={markedValues} onChange={setMarkedValues} />
        </div>
      </div>
    </div>
  );
};

export default ComboListPreview;
