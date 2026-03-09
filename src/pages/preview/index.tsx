import React, { useState } from 'react'
import Head from 'next/head'
import { AtomsPreview } from '@/components/atoms/Atoms.preview'
import { MoleculesPreview } from '@/components/molecules/Molecules.preview'

const NAV_STYLE = {
  wrapper: 'flex border-b border-gray-300 bg-gray-50 sticky top-0 z-[100]',
  tab: 'px-8 py-4 text-sm font-bold transition-all border-r border-gray-300',
  active: 'bg-white text-blue-600 shadow-[inset_0_-3px_0_#2563eb]',
  inactive: 'text-gray-500 hover:bg-gray-100',
} as const

export default function PreviewMain() {
  const [level, setLevel] = useState<'atoms' | 'molecules'>('atoms')

  return (
    <div className="min-h-screen bg-Bg2">
      <Head>
        <title>Component Guide System</title>
      </Head>

      {/* L1 Navigation: 대분류 전환 */}
      <nav className={NAV_STYLE.wrapper}>
        <button
          onClick={() => setLevel('atoms')}
          className={`${NAV_STYLE.tab} ${
            level === 'atoms' ? NAV_STYLE.active : NAV_STYLE.inactive
          }`}
        >
          LEVEL 1: ATOMS
        </button>
        <button
          onClick={() => setLevel('molecules')}
          className={`${NAV_STYLE.tab} ${
            level === 'molecules' ? NAV_STYLE.active : NAV_STYLE.inactive
          }`}
        >
          LEVEL 2: MOLECULES
        </button>
      </nav>

      {/* 컨텐츠 영역 */}
      <main className="p-6">
        {level === 'atoms' ? <AtomsPreview /> : <MoleculesPreview />}
      </main>
    </div>
  )
}