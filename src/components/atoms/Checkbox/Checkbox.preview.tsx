import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const CheckboxPreview = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Checkbox checked={checked} onChange={setChecked} label="체크박스" />
        <Checkbox checked={!checked} onChange={(v) => setChecked(!v)} />
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled checked label="비활성" />
        <Checkbox disabled label="비활성" />
      </div>
    </div>
  );
};

export default CheckboxPreview;
