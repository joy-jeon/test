import React from 'react';
import { Layout } from '@/components/layouts/Layout'; 
// CardList 컴포넌트와 함께 데이터 규격인 CardData 타입을 가져옵니다.
import CardList, { CardData } from '@/components/organisms/CardList';
import TaskListToolbar from '@/components/organisms/TaskListToolbar';

/**
 * 퍼블리싱 확인을 위한 더미 데이터 세트
 * Card.preview.tsx에서 검증된 아이콘(chartPie, building, chartLine)을 사용합니다.
 */
const DUMMY_TASKS: CardData[] = [
  {
    id: 1,
    status: "후보",
    statusType: "candidate",
    title: "[전자] ES본부 차세대 데이터 센터 구축",
    author: "gil dong.hong",
    tags: [
      { icon: "chartPie", label: "신규매출확보" },
      { icon: "building", label: "LG전자/HS본부" }
    ]
  },
  {
    id: 2,
    status: "진행",
    statusType: "progress",
    title: "AI 기반 업무 자동화 시스템 고도화 프로젝트",
    author: "joy.publisher",
    tags: [
      { icon: "chartLine", label: "원가절감" },
      { icon: "building", label: "LG전자/HS본부" }
    ]
  },
  {
    id: 3,
    status: "중단",
    statusType: "drop",
    title: "구형 서버 유지보수 및 데이터 이관 작업",
    author: "system.admin",
    tags: [
      { icon: "chartLine", label: "원가절감" },
      { icon: "building", label: "LG전자/HS본부" }
    ]
  },
  {
    id: 4,
    status: "진행",
    statusType: "progress",
    title: "제목이 아주 길어지는 경우에 레이아웃이 어떻게 반응하는지 확인하기 위한 테스트용 과제 제목입니다. 끝까지 잘 보여야 합니다.",
    author: "long.name.tester",
    tags: [
      { icon: "chartPie", label: "신규매출확보" },
      { icon: "building", label: "LG전자/HS본부" }
    ]
  },
  {
    id: 5,
    status: "후보",
    statusType: "candidate",
    title: "클라우드 전환 로드맵 수립 및 PoC 진행",
    author: "cloud.owner",
    tags: [
      { icon: "chartLine", label: "원가절감" },
      { icon: "building", label: "LG전자/클라우드전략" }
    ]
  },
  {
    id: 6,
    status: "중단",
    statusType: "drop",
    title: "스마트팩토리 설비 데이터 표준화 파일럿",
    author: "factory.pm",
    tags: [
      { icon: "chartPie", label: "신규매출확보" },
      { icon: "building", label: "LG전자/제조DX" }
    ]
  }
];

const TaskListPage = () => {
  // 상태별 카운트 집계 (UI에 바로 활용)
  const statusStats = DUMMY_TASKS.reduce(
    (acc, task) => {
      acc[task.statusType] += 1;
      return acc;
    },
    { progress: 0, candidate: 0, drop: 0 }
  );

  return (
    <Layout mainProps={{ backgroundVariant: 'bg2' }}>
      {/* 메인 컨테이너 레이아웃 
        - max-w-[1440px]: 디자인 가이드상의 최대 너비 제한
        - mx-auto: 중앙 정렬
        - 상하 여백은 MainContainer 기본 py-10(≈40px) 사용
      */}
      <div>
        {/* 상단 툴바: 제목/필터/집계/등록 버튼 */}
        <TaskListToolbar
          title="Winning Tech 과제생성현황"
          filters={[
            { label: '회사명', placeholder: '선택하세요' },
            { label: '본부명', placeholder: '선택하세요' },
            { label: '상태', placeholder: '선택하세요' },
          ]}
          totalCount={DUMMY_TASKS.length}
          stats={[
            { key: 'progress', label: '진행', count: statusStats.progress, icon: 'ok'},
            { key: 'candidate', label: '후보', count: statusStats.candidate, icon: 'attention'},
            { key: 'drop', label: 'Drop', count: statusStats.drop, icon: 'closeCircle'},
          ]}
          onSearch={() => console.log('조회 클릭')}
          onCreate={() => console.log('과제등록 클릭')}
        />

        {/* 카드 리스트 영역 */}
        <div className="mt-8">
          <CardList tasks={DUMMY_TASKS} showTotal={true} />
        </div>
      </div>
    </Layout>
  );
};

export default TaskListPage;
