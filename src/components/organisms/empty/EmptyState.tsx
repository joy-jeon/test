import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 유틸리티: Tailwind 클래스 병합
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 버튼 CVA 정의: 그라데이션 및 호버 상태 관리
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.5rem] rounded-full font-bold text-White transition-all hover:shadow-lg active:scale-95",
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-r from-LG-Red2 to-Primary", //
      },
      size: {
        md: "px-[2.5rem] py-[1rem] text-[1.125rem]", // 40px x 16px, 18px
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    }
  }
);

const EmptyState = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[100vh] bg-White overflow-hidden">
      
      {/* 1. 배경 레이어: 정적 별 요소 및 숨쉬는 그라데이션 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* 중앙 그라데이션 (Framer Motion Breathing Effect) */}
        <motion.img
          src="/images/gradient.png"
          alt="background gradient"
          className="w-[50rem] h-[31.25rem] opacity-60" // 800px x 500px
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 좌측 정적 별 (Vector1) */}
        <div className="absolute left-[10%] top-[20%]">
          <img src="/images/Vector1.png" alt="star left" className="w-[12.5rem] h-auto" /> {/* 200px */}
        </div>

        {/* 우측 정적 별 (Vector2) */}
        <div className="absolute right-[10%] top-[15%]">
          <img src="/images/Vector2.png" alt="star right" className="w-[15.625rem] h-auto opacity-80" /> {/* 250px */}
        </div>
      </div>

      {/* 2. 컨텐츠 레이어: 텍스트 및 버튼 (Z-Index 상단 배치) */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 상단: 등록된 과제가 없습니다 (DA-B3 / 14px) */}
        <p className="text-T-Body text-[0.875rem] mb-[0.5rem]">
          등록된 과제가 없습니다
        </p>

        {/* 중단: 과제를 생성해주세요 (DA-H1 / 32px) */}
        <h1 className="text-T-Title text-[2rem] font-bold mb-[2.75rem] tracking-[-0.04rem]">
          과제를 생성해주세요
        </h1>

        {/* 하단: 과제등록 버튼 */}
        <button className={cn(buttonVariants())}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
             <path d="M9 12L12 9L15 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
          과제등록
        </button>
      </div>

    </div>
  );
};

export default EmptyState;