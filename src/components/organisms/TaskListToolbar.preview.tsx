import React from 'react';
import TaskListToolbar, { TaskStatusStat, TaskFilter } from './TaskListToolbar';

// 프리뷰용 목업 데이터: 화면 조립 상태만 빠르게 확인할 수 있도록 분리
const SAMPLE_FILTERS: TaskFilter[] = [
  { label: '회사명', placeholder: '선택하세요' },
  { label: '본부명', placeholder: '선택하세요' },
  { label: '상태', placeholder: '선택하세요' },
];

const SAMPLE_STATS: TaskStatusStat[] = [
  { key: 'progress', label: '진행', count: 123, icon: 'ok', toneClass: 'text-da-t-positive' },
  { key: 'candidate', label: '후보', count: 2, icon: 'attention', toneClass: 'text-da-t-link' },
  { key: 'drop', label: 'Drop', count: 12, icon: 'closeCircle', toneClass: 'text-da-lg-red3' },
];

const TaskListToolbarPreview = () => {
  return (
    <div className="min-h-screen bg-da-bg1 p-6">
      <TaskListToolbar
        title="Winning Tech 과제생성현황"
        filters={SAMPLE_FILTERS}
        totalCount={137}
        stats={SAMPLE_STATS}
        onSearch={() => console.log('프리뷰: 조회 클릭')}
        onCreate={() => console.log('프리뷰: 과제등록 클릭')}
      />
    </div>
  );
};

export default TaskListToolbarPreview;
