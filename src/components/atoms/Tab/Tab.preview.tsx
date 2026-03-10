// src/components/preview/Tab.preview.tsx
import React, { useState } from 'react';
import { Tab } from '@/components/atoms/Tab/Tab';
import { Icon } from '@/components/atoms/Icon/Icon'

/**
 * Tab Atom Preview
 * Tab.tsx 내부의 button 마크업과 ICON_SLOT_CLASS 로직이 
 * 각 프롭스(leftIcon, rightIcon, active)에 따라 어떻게 출력되는지 검증합니다.
 */
export const TabPreview = () => {
  const [activeTab, setActiveTab] = useState('left');

  return (
    <div className="p-da-md space-y-12 bg-da-white min-h-screen">
      
      <section>
        <h2 className="text-da-h3 font-bold mb-6 pb-2 border-b border-da-divider-content-line text-da-t-title">
          2. State & Style Verification
        </h2>
        <div className="flex items-center gap-6">
          {/* active={false} 일 때의 text-da-t-body 색상 상속 확인 */}
          <Tab label="Default" active={false} leftIcon={<Icon name="aiSquare"/>} />
          
          {/* active={true} 일 때의 인디케이터(absolute span) 노출 확인 */}
          <Tab label="Active" active={true} leftIcon={<Icon name="aiPen"/>} />
          
          {/* disabled={true} 일 때의 cursor-not-allowed 및 이벤트 차단 확인 */}
          <Tab label="Disabled" disabled={true} leftIcon={<Icon name="aiSquare"/>} />
        </div>
      </section>

    </div>
  );
};

export default TabPreview;