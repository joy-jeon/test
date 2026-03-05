import type { NextPage } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { ButtonPreview, IconPreview } from '@/components/preview'

const LAYOUT = {
  page: 'min-h-screen bg-slate-100 text-slate-900',
  main: 'mx-auto w-full max-w-6xl px-6 py-10',
  content: 'mt-8 flex flex-col gap-4 lg:flex-row',
  lnb: 'w-full rounded-xl border border-slate-200 bg-white p-3 lg:sticky lg:top-0 lg:w-56 lg:shrink-0 lg:self-start',
  lnbNav: 'space-y-1',
  view: 'min-w-0 flex-1',
} as const

const TAB_STYLE = {
  base: 'w-full rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors',
  active: 'bg-slate-900 text-white',
  inactive: 'text-slate-700 hover:bg-slate-100',
} as const

const TAB_ITEMS = [
  { key: 'button', label: 'Button' },
  { key: 'icon', label: 'Icon' },
] as const

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'button' | 'icon'>('button')
  const view = useMemo(() => {
    if (activeTab === 'icon') return <IconPreview />
    return <ButtonPreview />
  }, [activeTab])

  return (
    <div className={LAYOUT.page}>
      <Head>
        <title>Atom Component Guide</title>
        <meta name="description" content="Button and Icon preview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={LAYOUT.main}>
        <h1 className="text-3xl font-bold sm:text-4xl">Atom Component Guide</h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          좌측 컴포넌트 메뉴를 선택하면 우측 프리뷰가 표시됩니다.
        </p>

        <div className={LAYOUT.content}>
          <aside className={LAYOUT.lnb}>
            <nav className={LAYOUT.lnbNav}>
              {TAB_ITEMS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`${TAB_STYLE.base} ${activeTab === key ? TAB_STYLE.active : TAB_STYLE.inactive}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </aside>

          <section className={LAYOUT.view}>{view}</section>
        </div>
      </main>
    </div>
  )
}

export default Home
