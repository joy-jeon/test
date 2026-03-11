import { Icon, type IconName } from '@/components/atoms/Icon/Icon'

const ICON_NAMES: IconName[] = [
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'arrow1-left',
  'arrow1-right',
  'arrow1-up',
  'arrow1-down',
  'plus',
  'minus',
  'close',
  'checkSmall',
  'sClose',
  'fileDown',
  'fileDownUpload',
  'clip',
  'search',
  'setting',
  'lock',
  'unlock',
  'calendar',
  'delete',
  'openNew',
  'info',
  'infoFill',
  'c',
  'attention',
  'attentionFill',
  'question',
  'time',
  'home',
  'man',
  'man1',
  'copy',
  'closeCircle',
  'siren',
  'ai',
  'doc',
  'addPhoto',
  'building',
  'chartLine',
  'chartPie',
  'next',
  'ok',
  'aiPen',
  'aiSquare',
  'aiGenerate',
  'image',
  'aiCamera',
  'magicEraser',
  'folder',
  'folderUP',
  'message',
  'share',
  'hourglass',
  'fileFailed',
  'filter',
  'rowMove',
]

const ICON_32_NAMES: IconName[] = ['setting', 'man', 'home', 'menu', 'aiAnswer']
const ICON_16_NAMES: IconName[] = ['closeCircleFill']
const ICON_60_ANIM_NAMES: IconName[] = ['aiAnimated']
const ICON_60_STATE_NAMES: IconName[] = ['stateNodata60', 'stateNotFound60', 'state3_60']

export function IconPreview() {
  return (
    <section className="rounded-xl border border-slate-200 bg-da-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">Icon Preview</h2>
      <p className="mt-1 text-sm text-slate-600">대표 사이즈: sm(16px) / md(24px) / lg(60px)</p>

      {/* Ghost 속성  */}
      <section className="space-y-6">
        <h2 className="text-da-h3 font-bold mb-6 pb-2 border-b border-da-divider-content-line text-da-t-title">
          3. Ghost Variant (Interaction Check)
        </h2>
        <p className="text-da-b4 text-da-t-discription mb-4">
          마우스 호버 시 배경색(da-bg1) 노출 및 커서(pointer) 변경
        </p>
        
        <div className="flex items-center gap-8 p-4 border border-dashed border-da-divider-content-line rounded-lg">
          {/* Default (Ghost false) */}
          <div className="flex flex-col items-center gap-2">
            <Icon name="aiSquare" ghost={false} size="md" />
            <span className="text-[10px] text-da-t-discription">Default (No Hover)</span>
          </div>

          {/* Ghost True - Size별 검증 */}
          <div className="flex flex-col items-center gap-2">
            <Icon name="aiSquare" ghost={true} size="sm"/>
            <span className="text-[10px] text-da-t-discription">Ghost SM</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Icon name="aiSquare" ghost={true} size="md"/>
            <span className="text-[10px] text-da-t-discription">Ghost MD</span>
          </div>

          {/* Ghost True - Color/Tone 조합 검증 */}
          <div className="flex flex-col items-center gap-2">
            <Icon name="aiPen" ghost={true} tone="primary" size="md"/>
            <span className="text-[10px] text-da-t-discription">Ghost Primary</span>
          </div>
        </div>
      </section>

      {/* Icon Color Usage (tone 활용) */}
      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon Color Usage</h3>
        <div className="mt-3 grid gap-4 md:grid-cols-1">
          <div className="rounded-lg border border-slate-200 bg-da-white p-4">
            <p className="text-xs font-medium text-slate-700">Icon tone prop (primary / disabled)</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="checkSmall" size="md" tone="primary" />
                <span className="text-xs text-da-t-primary">tone="primary"</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="checkSmall" size="md" tone="disabled" />
                <span className="text-xs text-da-t-disabled">tone="disabled"</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="checkSmall" size="md" tone="notice" />
                <span className="text-xs text-da-t-disabled">tone="notice"</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="checkSmall" size="md" tone="positive" />
                <span className="text-xs text-da-t-disabled">tone="positive"</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-600 p-1 ">
                <Icon name="checkSmall" size="md" tone="white" />
                <span className="text-xs text-da-t-disabled">tone="white"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Icon 16 (sm) 영역 */}
      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 16 (sm)</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
          {ICON_16_NAMES.map((name, index) => (
            <div key={`16-${name}`} className="rounded-lg border border-slate-200 bg-da-white px-3 py-4 text-center">
              <div className="flex h-8 items-center justify-center">
                {/* size={16} 대신 "sm" 사용 */}
                <Icon name={name} size="sm" />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Icon 24 (md) 영역 */}
      <section className="mt-6">
        <h3 className="text-base font-semibold text-slate-800">Icon 24 (md)</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ICON_NAMES.map((name, index) => (
            <div key={`24-${name}`} className="rounded-lg border border-slate-200 bg-da-white px-3 py-4 text-center">
              <div className="flex h-10 items-center justify-center">
                {/* 기본값이 "md"이므로 size 생략 가능 혹은 "md" 명시 */}
                <Icon name={name} size="md" />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Icon 32 (Custom) 영역 */}
      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 32 (Custom)</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5 md:max-w-2xl">
          {ICON_32_NAMES.map((name, index) => (
            <div key={`32-${name}`} className="rounded-lg border border-slate-200 bg-da-white px-3 py-4 text-center">
              <div className="flex h-12 items-center justify-center">
                {/* 규격 외 사이즈는 기존처럼 숫자 입력 (자동으로 style 주입됨) */}
                <Icon name={name} size={32} />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Icon 60 (lg) 영역 */}
      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 60 (lg)</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:max-w-2xl">
          {[...ICON_60_ANIM_NAMES, ...ICON_60_STATE_NAMES].map((name, index) => (
            <div key={`60-${name}`} className="rounded-lg border border-slate-200 bg-da-white px-3 py-4 text-center">
              <div className="flex h-20 items-center justify-center">
                {/* size={60} 대신 "lg" 사용 */}
                <Icon name={name} size="lg" />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
