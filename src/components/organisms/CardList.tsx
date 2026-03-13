import React from 'react';
import TaskCard from '@/components/molecules/Card/Card';
import { IconName } from '@/components/atoms/Icon/Icon';
import { cn } from '@/lib/utils';

// 1. 리스트에서 사용할 개별 카드 데이터의 규격
export interface CardData {
  id: string | number;
  status: string;
  statusType: 'drop' | 'candidate' | 'progress';
  title: string;
  author: string;
  authorIcon?: IconName;
  tags?: { icon: IconName; label: string }[];
}

// 2. CardList 컴포넌트의 Props 정의
interface CardListProps {
  tasks: CardData[];
  showTotal?: boolean;
  className?: string;
}

const CardList = ({ tasks = [], showTotal = true, className }: CardListProps) => {
  const totalCount = tasks.length;

  return (
    <div data-component="card-list-wrap" className={cn("flex w-full flex-col", className)}>
      {showTotal && (
        <div className="mb-[20px] flex items-center">
          <span className="text-da-b2 text-da-t-body">전체</span>
          <span className="ml-[4px] text-da-b2 font-bold text-da-primary">{totalCount}</span>
          <span className="text-da-b2 text-da-t-body">건</span>
        </div>
      )}

      {/* 반응형 그리드 전략:
        - grid-cols-1: 모바일
        - md:grid-cols-2: 태블릿
        - xl:grid-cols-3: 일반 데스크탑 (1280px 이상)
        - 2xl:grid-cols-4: 와이드 PC (1536px 이상)
      */}
      <div 
        data-component="card-grid" 
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-[24px]"
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            status={task.status}
            statusType={task.statusType}
            title={task.title}
            author={task.author}
            authorIcon={task.authorIcon}
            tags={task.tags}
            // 퍼블리싱 포인트: 카드가 그리드 너비에 꽉 차도록 min-w를 무력화하고 w-full 적용
            className="min-w-0 w-full"
            onClick={() => console.log(`${task.id}번 과제 클릭`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
