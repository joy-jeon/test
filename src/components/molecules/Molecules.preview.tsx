import { useState } from 'react'
// 추가할 프리뷰 컴포넌트 임포트
import { ButtonGroupPreview } from './ButtonGraoup/ButtonGroup.preview' 
import { TabMenuPreview } from './TabMenu/TabMenuPreview' 

const TAB_ITEMS = [
  { key: 'buttonGroup', label: 'ButtonGroup' }, 
  { key: 'tabMenu', label: 'TabMenu' },
  { key: 'inputGroup', label: 'InputGroup' },
] as const

type TabKey = (typeof TAB_ITEMS)[number]['key']

export function MoleculesPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('buttonGroup')

  // 탭 콘텐츠 렌더링 로직 분리
  const renderContent = () => {
    switch (activeTab) {
      case 'buttonGroup':
        return <ButtonGroupPreview />
      case 'tabMenu':
        return <TabMenuPreview/>
      case 'inputGroup':
        return <div className="text-da-t-placeholder">InputGroup Preview 준비 중...</div>
      default:
        return null
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl p-8">
      <header className="mb-8">
        <h1 className="text-da-h1 font-black text-da-t-title">Molecules Component</h1>
        <p className="text-da-b3 text-da-t-discription">Atoms가 조합된 기능 단위 컴포넌트입니다.</p>
      </header>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full rounded-xl border border-da-divider-content-line bg-da-bg1 p-3 lg:sticky lg:top-20 lg:w-56 lg:shrink-0 lg:self-start">
          <nav className="space-y-1">
            {TAB_ITEMS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full rounded-lg px-3 py-2 text-left text-da-b4 font-semibold transition-colors ${
                  activeTab === key 
                    ? 'bg-da-grid-top-line text-da-white' 
                    : 'text-da-t-body hover:bg-da-grid-hover'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="rounded-xl border border-da-divider-content-line p-10 bg-da-white shadow-sm">
             {renderContent()}
          </div>
        </section>
      </div>
    </div>
  )
}