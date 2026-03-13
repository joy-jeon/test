import React, { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '@/components/atoms/Button/Button'

const dummyLongText = `
아래는 더미 텍스트입니다. 반복해서 스크롤 테스트를 진행합니다.
- The Goodyear Tire & Rubber Company는 1898년 미국 오하이오에서 설립된 글로벌 타이어 회사입니다.
- 주요 제품으로는 승용차 타이어, 트럭 타이어, 항공기 타이어, 농업용 타이어 등이 있습니다.
- Goodyear는 200여 개의 국가에서 판매망을 갖추고 있으며, 21개의 제조 공장을 운영하고 있습니다.
- 대표적인 기술로는 RunOnFlat, SoundComfort, Fuel Max 등이 있으며, 환경 친화적 소재 개발에도 앞장서고 있습니다.
- Goodyear는 F1, NASCAR 등 모터스포츠 후원을 통해 브랜드 이미지를 강화하고 있습니다.
- 최근에는 전기차 전용 타이어와 스마트 타이어 솔루션 개발에 투자를 확대하고 있습니다.
- 글로벌 본사는 미국 오하이오주 애크런에 위치하며, 직원 수는 약 7만 명입니다.
`.repeat(4)

export function ModalPreview() {
  const [openShort, setOpenShort] = useState(false)
  const [openLong, setOpenLong] = useState(false)

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-da-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">Modal Preview</h2>
      <p className="text-sm text-slate-600">
        상단 60px, 하단 40px 여백을 유지하고, 내용이 길어지면 모달 내부에만 스크롤이 생깁니다.
      </p>

      <div className="flex gap-3">
        <Button size="md" variant="secondarySolid" onClick={() => setOpenShort(true)}>
          짧은 내용 모달
        </Button>
        <Button size="md" variant="secondarySolid" onClick={() => setOpenLong(true)}>
          긴 내용 모달
        </Button>
      </div>

      <Modal
        open={openShort}
        onClose={() => setOpenShort(false)}
        title="과제 생성"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="primaryLine" onClick={() => setOpenShort(false)}>
              취소
            </Button>
            <Button variant="secondarySolid" size="md">
              등록
            </Button>
          </div>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-da-b2 font-semibold text-da-t-title">회사명</label>
            <div className="h-10 rounded-md border border-da-form-input-line bg-da-white px-3 py-2 text-da-b2 text-da-t-body">
              선택하세요
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-da-b2 font-semibold text-da-t-title">과제명</label>
            <div className="h-10 rounded-md border border-da-form-input-line bg-da-white px-3 py-2 text-da-b2 text-da-t-body">
              예) 신제품 광고 캠페인
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-da-b2 font-semibold text-da-t-title">배경 및 세부 설명</label>
            <div className="h-24 rounded-md border border-da-form-input-line bg-da-white px-3 py-2 text-da-b2 text-da-t-body">
              입력하세요
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={openLong}
        onClose={() => setOpenLong(false)}
        title="과제 생성 - 스크롤 예시"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="primaryLine" onClick={() => setOpenLong(false)}>
              취소
            </Button>
            <Button variant="secondarySolid" size="md">
              등록
            </Button>
          </div>
        }
      >
        <div className="space-y-3">
          <div className="rounded-md border border-da-form-input-line bg-da-white px-3 py-2 text-da-b2 text-da-t-body">
            길이가 긴 텍스트가 아래에 이어집니다. 모달 내부에만 스크롤이 표시되어야 합니다.
          </div>
          <div className="rounded-md border border-da-form-input-line bg-da-white px-3 py-4 text-da-b2 text-da-t-body custom-scrollbar max-h-[420px] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-da-b2 text-da-t-body">{dummyLongText}</pre>
          </div>
        </div>
      </Modal>
    </div>
  )
}
