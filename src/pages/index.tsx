import React from 'react';
// 중괄호 { }를 제거하고 기본 임포트 방식으로 변경합니다.
import EmptyState from '@/components/organisms/empty/EmptyState';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-white">
      {/* 컴포넌트 내부에서 정의된 Props가 있다면 여기에 추가하세요 */}
      <EmptyState />
    </div>
  );
}