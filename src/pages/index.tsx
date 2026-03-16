import Link from 'next/link'
import Head from 'next/head'
import { Layout } from '@/components/layouts/Layout'
import { Icon } from '@/components/atoms/Icon/Icon'

type PageEntry = {
  id: string
  name: string
  route: string
  filePath: string
  description: string
  status: '완료' | '작업중' | '대기'
  previewRoute?: string
}

const PAGE_ENTRIES: PageEntry[] = [
  {
    id: 'component-guide',
    name: 'Component Guide (Atoms / Molecules)',
    route: '/preview',
    previewRoute: '/preview',
    filePath: 'src/pages/preview/index.tsx',
    status: '작업중',
    description: 'atom, molecule 등의 요소 가이드',
  },

  {
    id: 'task-list',
    name: 'Winning Tech 과제 리스트',
    route: '/task-list',
    previewRoute: '/task-list',
    filePath: 'src/pages/task-list.tsx',
    status: '완료',
    description: '카드형 과제 목록 + 상태별 카운터 + 필터/등록 버튼',
  },
  {
    id: 'task-empty',
    name: '빈 상태 화면 (Empty State)',
    route: '/task-empty',
    previewRoute: '/task-empty',
    filePath: 'src/pages/task-empty.tsx',
    status: '완료',
    description: '데이터 없을 때 노출되는 기본 안내 화면',
  },
  {
    id: 'modal-generate',
    name: '과제프로파일 입력 - 입력전',
    route: '/modal-generate',
    previewRoute: '/modal-generate',
    filePath: 'src/pages/modal-generate.tsx',
    status: '작업중',
    description: '',
  },
  
]

const pillClasses =
  'inline-flex items-center gap-2 rounded-full border border-da-divider-top-content-line bg-da-bg1 px-3 py-1 text-da-b4 font-semibold text-da-t-body'

const actionBtn =
  'inline-flex items-center gap-2 rounded-[10px] border border-da-btn-line bg-da-white px-3 py-2 text-da-b3 font-bold text-da-t-title transition hover:-translate-y-[1px] hover:border-da-btn-line-focus hover:shadow-sm'

export default function PageIndex() {
  return (
    <Layout mainProps={{ backgroundVariant: 'bg2', innerClassName: 'py-8' }}>
      <Head>
        <title>Page Index | Discovery Agent</title>
      </Head>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-da-b4 text-da-t-placeholder">
        <Icon name="home" size="sm" className="text-da-t-placeholder" />
        <Link href="/" className="font-semibold text-da-t-body hover:text-da-btn-purple-focus">
          Home
        </Link>
        <Icon name="arrow-right" size="sm" className="text-da-divider-top-content-line" />
        <span className="font-semibold text-da-t-title">Page Index</span>
      </div>

      {/* Title + actions */}
      <div className="flex flex-wrap items-end justify-between gap-3 mt-5">
        <div>
          <p className="font-semibold tracking-wide uppercase text-da-b4 text-da-t-placeholder">Publishing Navigator</p>
          <h1 className="mt-1 font-bold text-da-h1 text-da-t-title">페이지 작업물 인덱스</h1>
          <p className="mt-2 text-da-b2 text-da-t-discription">
          </p>
        </div>
        <Link href="/preview" className={`${actionBtn} bg-da-btn-purple text-da-primary border-da-btn-purple`}>
          <Icon name="ai" size="sm" className="text-da-primary" />
          컴포넌트 프리뷰 열기
        </Link>
      </div>

      {/* Rows (compact grid) */}
      <div className="mt-8 overflow-hidden border shadow-sm rounded-2xl border-da-divider-top-content-line bg-da-white">
        <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_1.8fr_1.2fr_auto] items-center gap-3 border-b border-da-divider-top-content-line px-5 py-3 text-da-b4 font-semibold tracking-wide text-da-t-placeholder md:grid">
          <span>Page</span>
          <span>Route</span>
          <span>Status</span>
          <span>Description</span>
          <span>File</span>
          <span className="text-right">Action</span>
        </div>

        <div className="divide-y divide-da-divider-top-content-line">
          {PAGE_ENTRIES.map((page) => (
            <article
              key={page.id}
              className="grid grid-cols-1 gap-3 px-5 py-4 md:grid-cols-[1.2fr_1fr_0.8fr_1.8fr_1.2fr_auto] md:items-center"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-bold leading-tight text-da-b3 text-da-t-title">{page.name}</h2>
                <p className="text-da-b4 text-da-t-placeholder md:hidden">{page.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 px-3 py-2 rounded-lg bg-da-bg1 text-da-b4 text-da-t-body">
                <span className="text-da-t-body">{page.route}</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-da-b4 font-semibold ${
                    page.status === '완료'
                      ? 'border-green-200 bg-green-50 text-green-700'
                      : page.status === '작업중'
                        ? 'border-amber-200 bg-amber-50 text-amber-700'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {page.status}
                </span>
              </div>

              <p className="hidden text-da-b4 text-da-t-discription md:block">{page.description}</p>

              <div className="flex flex-wrap items-center gap-2 text-da-b4 text-da-t-body">
                <span className="font-semibold md:hidden">File</span>
                <code className="rounded bg-da-bg1 px-2 py-[2px] font-mono text-[12px] text-da-t-title">
                  {page.filePath}
                </code>
              </div>

              <div className="flex justify-start md:justify-end">
                <Link href={page.route} className={`${actionBtn} bg-da-bg3 hover:bg-da-bg3-deep`}>
                  <Icon name="arrow-right" size="sm" tone="gray" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}
