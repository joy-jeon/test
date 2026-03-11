// src/components/molecules/Tab/TabMenuPreview.tsx
import { useState } from 'react';
import { TabMenu } from './TabMenu';
import { Icon } from '../../atoms/Icon/Icon';
import { Button } from '@/components/atoms';

export function TabMenuPreview() {
  const [activeTab, setActiveTab] = useState('tab1');

  const items = [
    { id: 'tab1', label: '과제 프로파일', leftIcon: <Icon name="aiSquare" /> },
    { id: 'tab2', label: '과제생성 Agent', leftIcon: <Icon name="aiPen" /> },
    { id: 'tab3', label: '비활성 탭', leftIcon: <Icon name="aiPen" />, disabled: true },
  ];

  return (
    <div className="p-da-space-md space-y-12 bg-da-white min-h-screen">
      <section className="space-y-4">
        <div className="border-b border-da-divider-content-line pb-2">
          <h3 className="text-da-h3 font-bold text-da-t-title">TabMenu Logic Sync</h3>
          <p className="text-da-b4 text-da-t-discription">Tab 아톰의 Props와 자동 동기화된 Molecule을 검증합니다.</p>
        </div>
        <div className="rounded-lg border border-da-divider-content-line p-6">
          <TabMenu 
            items={items} 
            activeId={activeTab} 
            onChange={setActiveTab} 
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="border-b border-da-divider-content-line pb-2">
          <h3 className="text-da-h3 font-bold text-da-t-title">Full Width & Right Slot</h3>
        </div>
        <div className="rounded-lg border border-da-divider-content-line p-6">
          <TabMenu 
            items={items.slice(0, 2)} 
            activeId={activeTab} 
            onChange={setActiveTab}
            widthType="fit"
            rightElement={
              <Button variant="generate" size="generateMd" leftIcon={<Icon name="ai" size="md" />}>
                과제등록40 md
              </Button>
            }
          />
        </div>
      </section>
    </div>
  );
}