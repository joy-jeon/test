import React from 'react'
import ButtonGroup from '@/components/molecules/ButtonGroup'
import { Button } from '@/components/atoms'

export function ButtonGroupPreview() {
  return (
    <section className="rounded-xl border border-slate-200 bg-da-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">ButtonGroup Preview</h2>
      <p className="mt-1 text-sm text-slate-600">
        align / gap / width / direction 조합으로 Button들을 그룹핑하는 예시입니다.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">LEFT (row, full, left, sm)</h3>
          <p className="mt-1 text-xs text-slate-500">default 좌측 정렬</p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">

            <ButtonGroup>
              <Button variant="secondaryLine" size="md">
                취소
              </Button>
              <Button variant="secondarySolid" size="md">
                저장
              </Button>
            </ButtonGroup>

          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">CENTER</h3>
          <p className="mt-1 text-xs text-slate-500">중앙 정렬</p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">

            <ButtonGroup align="center">
              <Button variant="secondaryLine" size="md">
                취소
              </Button>
              <Button variant="secondarySolid" size="md">
                저장
              </Button>
            </ButtonGroup>

          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">RIGHT</h3>
          <p className="mt-1 text-xs text-slate-500">우측 정렬</p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">

            <ButtonGroup align="right" width="full">
              <Button variant="secondaryLine" size="md">
                임시저장
              </Button>
              <Button variant="secondarySolid" size="md">
                생성하기
              </Button>
            </ButtonGroup>

          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">COLUMN</h3>
          <p className="mt-1 text-xs text-slate-500">개행</p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 max-w-xs">

            <ButtonGroup direction="column" gap="md" width="full">
              <Button variant="secondarySolid" size="md">
                주요 액션
              </Button>
              <Button variant="secondaryLine" size="md">
                보조 액션
              </Button>
            </ButtonGroup>

          </div>
        </div>
      </div>
    </section>
  )
}

