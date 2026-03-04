import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '../components/atoms/Button'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Head>
        <title>Tailwind Starter</title>
        <meta name="description" content="Next.js + TypeScript + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center gap-6 px-6">
        <p className="rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide shadow">
          ATOM COMPONENT EXAMPLE
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Tailwind 스타일 적용 완료
        </h1>
        <p className="max-w-xl text-base text-slate-600 sm:text-lg">
          이제 버튼, 입력창 같은 작은 단위 컴포넌트를 <code>src/components/atoms</code>
          에서 관리하면서 Tailwind 클래스로 빠르게 확장할 수 있습니다.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button variant="primarySolid">버튼</Button>
          <Button variant="primaryLine">버튼</Button>
          <Button variant="secondaryLine" size="md">취소</Button>
          <Button variant="secondarySolid" size="md">확인</Button>
          <Button variant="generate" size="generateSm">과제생성</Button>
          <Button variant="generate" size="generateMd">과제생성</Button>
          <Button variant="generate" size="generateLg">과제생성</Button>
        </div>
      </main>
    </div>
  )
}

export default Home
