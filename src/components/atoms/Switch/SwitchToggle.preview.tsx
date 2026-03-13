import { useState } from "react";
import { SwitchToggle } from "./SwitchToggle";

export const SwitchTogglePreview = () => {
  const [on, setOn] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <SwitchToggle checked={on} onChange={setOn} label="스위치" />
        <SwitchToggle checked={!on} onChange={(v) => setOn(!v)} />
      </div>
      <div className="flex items-center gap-3">
        <SwitchToggle disabled checked label="비활성" />
        <SwitchToggle disabled label="비활성" />
      </div>
    </div>
  );
};

export default SwitchTogglePreview;
