import { useState } from 'react'
import { TabMenu } from './TabMenu'
import { Icon } from '../../atoms' // Icon Atom 임포트

export function TabMenuPreview() {
  const [activeTab, setActiveTab] = useState('tab1')

  const items = [
    { id: 'tab1', label: '과제 프로파일', iconName: 'profile' },
    { id: 'tab2', label: '과제생성 Agent', iconName: 'agent' },
    { id: 'tab3', label: '비활성 탭', iconName: 'profile', disabled: true },
  ];

  return (
    <div className="space-y-12 text-left">
      {/* 1. 기본 및 상태 검증 */}
      <section className="space-y-4">
        <div className="border-b border-da-divider-content-line pb-2">
          <h3 className="text-da-h3 font-bold text-da-t-title">1. Basic & States</h3>
          <p className="text-da-b4 text-da-t-discription">Icon 컴포넌트를 통한 상태별 컬러 동기화를 검증합니다.</p>
        </div>
        <div className="rounded-lg border border-da-divider-content-line bg-da-white p-6">
          <TabMenu 
            items={items} 
            activeId={activeTab} 
            onChange={setActiveTab} 
          />
        </div>
      </section>

      {/* 2. 실무 케이스 (우측 슬롯 포함) */}
      <section className="space-y-4">
        <div className="border-b border-da-divider-content-line pb-2">
          <h3 className="text-da-h3 font-bold text-da-t-title">2. Right Slot Integration</h3>
          <p className="text-da-b4 text-da-t-discription">과제등록 버튼 내 아이콘과 텍스트의 정렬을 확인합니다.</p>
        </div>
        <div className="rounded-lg border border-da-divider-content-line bg-da-white p-6">
          <TabMenu 
            items={items.slice(0, 2)} 
            activeId={activeTab} 
            onChange={setActiveTab}
            rightElement={
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {/* 알림 아이콘도 Icon 컴포넌트로 대체 가능 (예: name="info") */}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-da-t-attention text-[10px] font-bold text-da-white">!</span>
                  <span className="text-da-b4 text-da-t-body">코멘트영역입니다.</span>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#687AE6] to-[#E668B3] px-4 py-2 text-da-b3 font-bold text-da-white transition-opacity hover:opacity-90">
                  <Icon name="plus" size={16} />
                  과제등록
                </button>
              </div>
            }
          />
        </div>
      </section>
    </div>
  )
}