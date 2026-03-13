import React from 'react';
import { Divider } from './Divider';

/**
 * Divider 컴포넌트 전용 프리뷰
 */
const DividerPreview = () => {
  return (
    <div className="p-[40px] bg-white min-h-screen">
      
      {/* 1. 기본형 */}
      <div className="mb-[60px]">
        <h2 className="text-[14px] font-bold text-gray-400 mb-[20px] uppercase">1. Default State</h2>
        <div className="p-[20px] border border-gray-100">
          <p className="text-[14px] mb-[10px]">위쪽 콘텐츠 영역</p>
          <Divider />
          <p className="text-[14px] mt-[10px]">아래쪽 콘텐츠 영역</p>
        </div>
      </div>

    </div>
  );
};

export default DividerPreview;