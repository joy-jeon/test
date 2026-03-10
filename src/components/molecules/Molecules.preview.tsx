import { useMemo, useState } from 'react'
// 예시 컴포넌트 (실제 파일 경로에 맞춰 수정 필요)
// import { SearchFieldPreview } from './SearchField.preview'

const TAB_ITEMS = [
  { key: 'searchField', label: 'SearchField' },
  { key: 'inputGroup', label: 'InputGroup' },
] as const

export function MoleculesPreview() {
  const [activeTab, setActiveTab] = useState<(typeof TAB_ITEMS)[number]['key']>('searchField')

  return (
    <div className="mx-auto w-full max-w-6xl">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Molecules Component</h1>
        <p className="text-sm text-gray-500">Atoms가 조합된 기능 단위 컴포넌트입니다.</p>
      </header>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 lg:sticky lg:top-20 lg:w-56 lg:shrink-0 lg:self-start">
          <nav className="space-y-1">
            {TAB_ITEMS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                  activeTab === key ? 'bg-gray-900 text-da-white' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="rounded-xl border border-gray-200 p-10 text-center text-gray-400">
             [{activeTab}] 컴포넌트의 프리뷰 내용을 작성하세요.
          </div>
        </section>
      </div>
    </div>
  )
}