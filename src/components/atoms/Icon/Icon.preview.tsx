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

const ICON_32_NAMES: IconName[] = ['setting', 'man', 'home', 'menu']
const ICON_16_NAMES: IconName[] = ['closeCircleFill']
const ICON_60_ANIM_NAMES: IconName[] = ['aiGenerate60Animated', 'aiGenerate60v1', 'aiGenerate60v2', 'aiGenerate60v3']
const ICON_60_STATE_NAMES: IconName[] = ['stateNodata60', 'stateNotFound60', 'state3_60']

export function IconPreview() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">Icon Preview</h2>
      <p className="mt-1 text-sm text-slate-600">대표 사이즈: 24px / 32px / 60px(animation, state) 16px, 48px 예외</p>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 16</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
          {ICON_16_NAMES.map((name, index) => (
            <div
              key={`16-${name}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
            >
              <div className="flex h-8 items-center justify-center text-Icon-Gray">
                <Icon name={name} size={16} />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-base font-semibold text-slate-800">Icon 24</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ICON_NAMES.map((name, index) => (
            <div
              key={`24-${name}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
            >
              <div className="flex h-10 items-center justify-center text-Icon-Gray">
                <Icon name={name} size={24} />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 32</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
          {ICON_32_NAMES.map((name, index) => (
            <div
              key={`32-${name}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
            >
              <div className="flex h-12 items-center justify-center text-Icon-Gray">
                <Icon name={name} size={32} />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon Color Usage</h3>
        <p className="mt-1 text-xs text-slate-600">
          wrapper의 텍스트 컬러(Tailwind 변수) 또는 Icon의 tone으로 색상 제어
        </p>

        <div className="mt-3 grid gap-4 md:grid-cols-2">
          

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium text-slate-700">Icon tone prop (white / gray)</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-md bg-Icon-Gray px-3 py-2 text-White">
                <Icon name="plus" size={24} tone="white" />
                <span className="text-xs text-slate-100">tone="white"</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-White px-3 py-2">
                <Icon name="plus" size={24} tone="gray" />
                <span className="text-xs text-slate-700">tone="gray"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 60 (Animation)</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:max-w-2xl">
          {ICON_60_ANIM_NAMES.map((name, index) => (
            <div
              key={`60-${name}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
            >
              <div className="flex h-20 items-center justify-center text-Icon-Gray-State">
                <Icon name={name} size={60} />
              </div>
              <p className="mt-2 break-all text-xs text-slate-700">
                {String(index + 1).padStart(2, '0')}. {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-slate-800">Icon 60 (State)</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ICON_60_STATE_NAMES.map((name, index) => (
            <div
              key={`60-state-${name}`}
              className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
            >
              <div className="flex h-20 items-center justify-center text-Icon-Gray">
                <Icon name={name} size={60} tone="gray" />
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
