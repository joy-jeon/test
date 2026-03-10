import React from 'react';
// 중괄호 { }를 제거하고 기본 임포트 방식으로 변경합니다.
import EmptyState from '@/components/organisms/empty/EmptyState';
import { AtomsPreview } from '@/components';
import { MoleculesPreview } from '@/components/molecules/Molecules.preview';

export default function Home() {
  return (
    <div className="">
      <EmptyState />
      <AtomsPreview />
      <MoleculesPreview />
    </div>
  );
}