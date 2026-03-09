import { useMemo, useState } from 'react'
import { ButtonPreview } from '@/components/atoms/Button/Button.preview'
import { IconPreview } from '@/components/atoms/Icon/Icon.preview'
import FontPreview from '@/components/atoms/Font/Font.preview'

const LAYOUT = {
  main: 'mx-auto w-full max-w-6xl',
  content: 'flex flex-col gap-6 lg:flex-row',
  lnb: 'w-full rounded-xl border border-gray-200 bg-gray-50 p-3 lg:sticky lg:top-20 lg:w-56 lg:shrink-0 lg:self-start',
  lnbNav: 'space-y-1',
  view: 'min-w-0 flex-1',
} as const

const TAB_STYLE = {
  base: 'w-full rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors',
  active: 'bg-gray-900 text-white',
  inactive: 'text-gray-700 hover:bg-gray-200',
} as const

const TAB_ITEMS = [
  { key: 'button', label: 'Button' },
  { key: 'icon', label: 'Icon' },
  { key: 'font', label: 'Font' },
] as const

export function AtomsPreview() {
  const [activeTab, setActiveTab] = useState<(typeof TAB_ITEMS)[number]['key']>('button')

  const view = useMemo(() => {
    if (activeTab === 'icon') return <IconPreview />
    if (activeTab === 'font') return <FontPreview />
    return <ButtonPreview />
  }, [activeTab])

  return (
    <div className={LAYOUT.main}>
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900">Atoms Component</h1>
        <p className="text-sm text-gray-500">디자인 시스템의 최소 단위 컴포넌트입니다.</p>
      </header>

      <div className={LAYOUT.content}>
        <aside className={LAYOUT.lnb}>
          <nav className={LAYOUT.lnbNav}>
            {TAB_ITEMS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`${TAB_STYLE.base} ${
                  activeTab === key ? TAB_STYLE.active : TAB_STYLE.inactive
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <section className={LAYOUT.view}>{view}</section>
      </div>
    </div>
  )
}