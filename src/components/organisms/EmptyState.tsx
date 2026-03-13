import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button/Button'; 
import { Icon } from '@/components/atoms/Icon/Icon';

const EmptyState = () => {
  return (
    <div data-component="empty-task" className="relative flex flex-col items-center justify-center w-full min-h-screen bg-da-white overflow-hidden">
      
      {/* 1. 배경 레이어 */}
      {/* 수정됨: bottom-0 중복 제거, justify-end를 justify-center로 변경 (우측 쏠림 방지) */}
      <div data-component="obj-gradient" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* 숨쉬기 애니메이션이 적용되는 래퍼 */}
        {/* 수정됨: translate-y-[35%]를 추가하여 레이어를 화면 하단으로 내림 */}
        <motion.div
          className="relative flex items-center justify-center w-full h-full translate-y-[90%]"
          // 수정됨: 육안으로 확인 가능하도록 scale 폭을 1.25로 키우고, opacity 변화를 추가하여 숨쉬는 느낌 강화
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* 첫 번째 레이어: 핑크색 */}
          <div className="absolute w-[314px] h-[314px] rounded-full bg-[#FF86E1] blur-[130px] transform-gpu -translate-x-12 -translate-y-6" />

          {/* 두 번째 레이어: 파란색 */}
          <div className="absolute w-[180px] h-[180px] rounded-full bg-[#89BCFF] blur-[100px] transform-gpu translate-x-16 translate-y-12" />
        </motion.div>

        <div data-component="obj-left" className="absolute left-[10%] top-[20%]">
          <img src="images/nodata_generate_left.png" alt="" className="w-[12.5rem] h-auto" />
        </div>

        <div data-component="obj-right" className="absolute right-[10%] top-[15%]">
          <img src="images/nodata_generate_right.png" alt="" className="w-[15.625rem] h-auto opacity-80" />
        </div>
      </div>

      {/* 컨텐츠 레이어 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-da-t-discription text-[28px] mb-da-space-xsm">
          등록된 과제가 없습니다
        </p>

        <h1 className="text-da-t-title text-[50px] font-bold mb-[40px]">
          과제를 생성해주세요
        </h1>

        <Button variant="generate" size="generateXlg" leftIcon={<Icon name="ai" size="lg" />}>
          과제생성
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;