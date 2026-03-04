import type { NextPage } from 'next'
import Head from 'next/head'
import { ButtonPreview, IconPreview } from '@/components/atoms/preview'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Head>
        <title>Atom Component Preview</title>
        <meta name="description" content="Button and Icon preview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Atom Component Preview</h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          프리뷰 소스는 <code>src/components/atoms/preview</code>에서 관리합니다.
        </p>

        <div className="mt-8 space-y-6">
          <ButtonPreview />
          <IconPreview />
        </div>
      </main>
    </div>
  )
}

export default Home
