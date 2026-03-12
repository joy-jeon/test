import React from 'react';
import { Header } from '@/components/organisms/Header';
import { MainContainer } from './MainContainer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-da-white">
      {/* 고정 헤더가 필요할 경우 여기에 sticky/fixed 클래스를 추가 가능 */}
      <Header />
      
      {/* 페이지별 실제 컨텐츠 영역 */}
      <MainContainer>
        {children}
      </MainContainer>
      
      {/* 추후 Dimmed나 Modal이 들어올 최상위 포탈 위치 */}
      <div id="modal-root" />
    </div>
  );
};