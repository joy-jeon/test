import React from 'react';
import TaskCard from './Card'; // 같은 경로의 Card 컴포넌트
import { Icon } from '@/components/atoms/Icon/Icon';

const CardPreview = () => {
  return (
    <div className="p-10 bg-da-bg1 min-h-screen">
      <h1 className="text-2xl font-bold mb-10">Task Card Component Previews</h1>

      <div className="grid grid-cols-1 gap-10 max-w-[1200px]">
        
        {/* Case 1: 후보 상태 (Candidate) - 업로드된 main.png 케이스 */}
        <section>
          <h2 className="text-da-b1 font-bold mb-4 text-da-t-description">1. Candidate State</h2>
          <TaskCard
            status="후보"
            statusType="candidate"
            title="[전자] ES본부 차세대 데이터 센터"
            author="gil dong.hong"
            tags={[
              { icon: 'chartPie', label: '신규매출확보' },
              { icon: 'building', label: 'LG전자/HS본부' },
            ]}
          />
        </section>

        {/* Case 2: 진행 상태 (Progress) - 호버 시 이펙트 확인용 */}
        <section>
          <h2 className="text-da-b1 font-bold mb-4 text-da-t-description">2. Progress State (Hover for effects)</h2>
          <TaskCard
            status="진행"
            statusType="progress"
            title="AI 기반 업무 자동화 시스템 구축 프로젝트"
            author="gil dong.hong"
            rightElement={"오른쪽 test"}
            tags={[
              { icon: 'chartLine', label: '원가절감' },
              { icon: 'building', label: 'LG전자/HS본부' },
            ]}
          />
        </section>

        {/* Case 3: 중단/탈락 상태 (Drop) */}
        <section>
          <h2 className="text-da-b1 font-bold mb-4 text-da-t-description">3. Drop State</h2>
          <TaskCard
            status="중단"
            statusType="drop"
            title="구형 서버 유지보수 및 이관 작업"
            author="system.admin"
            tags={[
                { icon: 'chartLine', label: '원가절감' },
                { icon: 'building', label: 'LG전자/HS본부' },
            ]}
          />
        </section>

        {/* Case 4: 데이터가 많은 케이스 (Edge Case 테스트) */}
        <section>
          <h2 className="text-da-b1 font-bold mb-4 text-da-t-description">4. Multi-tag & Long Title Case</h2>
          <TaskCard
            status="진행"
            statusType="progress"
            title="제목이 아주 길어지는 경우에 레이아웃이 어떻게 반응하는지 확인하기 위한 테스트용 과제 제목입니다. 끝까지 잘 보여야 합니다."
            author="long.name.tester"
            tags={[
              { icon: 'chartPie', label: '신규매출확보' },
              { icon: 'building', label: 'LG전자/HS본부' },
            ]}
          />
        </section>

      </div>
    </div>
  );
};

export default CardPreview;