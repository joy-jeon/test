import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button/Button'; 
import { Icon } from '@/components/atoms/Icon/Icon';

const EmptyState = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-White overflow-hidden">
      
      {/* 1. 배경 레이어: public/images 폴더의 파일을 참조합니다 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.img
          src="/images/empty/nodata_generate_gradient.png"
          alt=""
          className="w-[50rem] h-[31.25rem] opacity-60"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-[10%] top-[20%]">
          <img src="/images/empty/nodata_generate_left.png" alt="" className="w-[12.5rem] h-auto" />
        </div>

        <div className="absolute right-[10%] top-[15%]">
          <img src="/images/empty/nodata_generate_right.png" alt="" className="w-[15.625rem] h-auto opacity-80" />
        </div>
      </div>

      {/* 2. 컨텐츠 레이어: 디자인 토큰(da-h1, da-b3)을 적용합니다 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-T-Body text-da-b3 mb-[0.5rem]">
          등록된 과제가 없습니다
        </p>

        <h1 className="text-T-Title text-da-h1 font-bold mb-[2.75rem]">
          과제를 생성해주세요
        </h1>

        <Button variant="generate" size="generateXlg" leftIcon={<Icon name="ai" size={48} />}>
          과제생성
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;