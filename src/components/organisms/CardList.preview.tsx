import React from 'react';
import CardList, { CardData } from './CardList';

const SAMPLE_TASKS: CardData[] = [
  {
    id: 1,
    status: '진행',
    statusType: 'progress',
    title: 'AI 기반 공정 최적화 PoC',
    author: '홍길동',
    authorIcon: 'man',
    tags: [
      { icon: 'ok', label: 'PoC' },
      { icon: 'attention', label: '스마트팩토리' },
    ],
  },
  {
    id: 2,
    status: '후보',
    statusType: 'candidate',
    title: '차세대 배터리 소재 연구',
    author: '이영희',
    authorIcon: 'man',
    tags: [{ icon: 'attention', label: 'R&D' }],
  },
  {
    id: 3,
    status: 'Drop',
    statusType: 'drop',
    title: 'IoT 센서 네트워크 확장',
    author: '박민수',
    authorIcon: 'man',
    tags: [{ icon: 'closeCircle', label: '네트워크' }],
  },
];

const CardListPreview = () => {
  return (
    <div className="min-h-screen bg-da-bg1 p-6 space-y-8">
      <section>
        <h2 className="mb-4 text-da-h3 font-bold text-da-t-title">기본 (showTotal 포함)</h2>
        <CardList tasks={SAMPLE_TASKS} showTotal={true} />
      </section>
    </div>
  );
};

export default CardListPreview;
