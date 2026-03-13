import { Button } from '@/components/atoms/Button/Button'
import { Icon } from '@/components/atoms/Icon/Icon'

function VariantBlock({
  title,
  description,
  able,
  disabled,
}: {
  title: string
  description?: string
  able: React.ReactNode
  disabled: React.ReactNode
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {description && <p className="mt-1 text-xs text-slate-500">{description}</p>}

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-slate-200 bg-da-white p-3">
          <p className="text-xs font-medium text-emerald-700">Able</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">{able}</div>
        </div>

        <div className="rounded-md border border-slate-200 bg-da-white p-3">
          <p className="text-xs font-medium text-slate-500">Disabled</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">{disabled}</div>
        </div>
      </div>
    </section>
  )
}

export function ButtonPreview() {
  return (
    <section className="rounded-xl border border-slate-200 bg-da-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">Button Preview</h2>
      <p className="mt-1 text-sm text-slate-600">Variant별로 Able / Disabled 상태를 나눠서 확인</p>

      <div className="mt-6 space-y-4">
        <VariantBlock
          title="Primary Solid (H32)"
          able={
            <>
              <Button variant="primarySolid">primarySolid</Button>
              <Button variant="primarySolid" leftIcon={<Icon name="plus" size="md" />}>
                primarySolid
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="primarySolid" disabled>
                primarySolid
              </Button>
              <Button variant="primarySolid" leftIcon={<Icon name="plus" size="md" />} disabled>
                primarySolid
              </Button>
            </>
          }
        />

        <VariantBlock
          title="Primary Line (H32)"
          able={
            <>
              <Button variant="primaryLine">primaryLine</Button>
              <Button variant="primaryLine" leftIcon={<Icon name="setting" size="md" />}>
                primaryLine
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="primaryLine" disabled>
                primaryLine
              </Button>
              <Button variant="primaryLine" leftIcon={<Icon name="setting" size="md" />} disabled>
                primaryLine
              </Button>
            </>
          }
        />

        <VariantBlock
          title="Secondary Solid (H40)"
          able={
            <>
              <Button variant="secondarySolid" size="md">
                secondarySolid
              </Button>
              <Button variant="secondarySolid" size="md" leftIcon={<Icon name="plus" size="md" />}>
                secondaryLine
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="secondarySolid" size="md" disabled>
                secondarySolid
              </Button>
              <Button variant="secondarySolid" size="md" leftIcon={<Icon name="plus" size="md" />} disabled>
              secondarySolid
              </Button>
            </>
          }
        />

        <VariantBlock
          title="Secondary Line (H40)"
          able={
            <>
              <Button variant="secondaryLine" size="md">
                secondaryLine
              </Button>
              <Button variant="secondaryLine" size="md" leftIcon={<Icon name="plus" size="md" />}>
                secondaryLine
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="secondaryLine" size="md" disabled>
                secondaryLine
              </Button>
              <Button variant="secondaryLine" size="md" leftIcon={<Icon name="plus" size="md" />} disabled>
                secondaryLine
              </Button>
            </>
          }
        />

        <VariantBlock
          title="Generate"
          able={
            <>
              <Button variant="generate" size="generateSm" leftIcon={<Icon name="ai" size="md" />}>
                과제생성 32 sm
              </Button>
              <Button variant="generate" size="generateMd" leftIcon={<Icon name="ai" size="md" />}>
                과제생성 40 md
              </Button>
              <Button variant="generate" size="generateLg" leftIcon={<Icon name="ai" size={32} />}>
                과제생성 60 lg
              </Button>
              <Button variant="generate" size="generateXlg" leftIcon={<Icon name="ai" size="lg" />}>
                과제생성 80 xlg
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="generate" size="generateSm" leftIcon={<Icon name="ai" size="md" />} disabled>
                과제생성
              </Button>
            </>
          }
        />

        <VariantBlock
          title="Icon Variants"
          description="아이콘 단독 사용 시 tone으로 white/gray 선택. 버튼 안에서는 버튼 text 색을 상속."
          able={
            <>
              <Button variant="iconSolid" aria-label="검색">
                <Icon name="search" size="md" />
              </Button>
              
              <Button variant="iconLine" aria-label="설정">
                <Icon name="plus" size="md" />
              </Button>              
             
              <Button variant="icon" aria-label="초기화 gray">
                <Icon name="closeCircleFill" size="sm" tone="gray" />
              </Button>

              <Button variant="iconLine" aria-label="뒤로가기">
                <Icon name="arrow-left" size="md" />
              </Button>
              <Button variant="iconLine" aria-label="삭제">
                <Icon name="minus" size="md" />
              </Button>
            </>
          }
          disabled={
            <>
              <Button variant="iconSolid" aria-label="검색" disabled>
                <Icon name="search" size="md" />
              </Button>
              <Button variant="iconLine" aria-label="설정" disabled>
                <Icon name="plus" size="md" />
              </Button>
              <Button variant="icon" aria-label="초기화" disabled>
                <Icon name="closeCircleFill" size="sm" />
              </Button>
            </>
          }
        />
      </div>
    </section>
  )
}
