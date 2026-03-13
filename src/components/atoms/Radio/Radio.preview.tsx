import { useState } from "react";
import { Radio } from "./Radio";

export const RadioPreview = () => {
  const [value, setValue] = useState("a");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Radio
          name="radioDemo"
          checked={value === "a"}
          onChange={() => setValue("a")}
          label="옵션 A"
        />
        <Radio
          name="radioDemo"
          checked={value === "b"}
          onChange={() => setValue("b")}
          label="옵션 B"
        />
      </div>
      <div className="flex items-center gap-3">
        <Radio name="radioDisabled" checked disabled label="비활성" />
        <Radio name="radioDisabled" disabled label="비활성" />
      </div>
    </div>
  );
};

export default RadioPreview;
