import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 유틸리티: Tailwind 클래스 병합
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LoadingBarProps {
  /** 스피너의 크기 (px 단위, 기본값: 40) */
  size?: number;
  /** 추가적인 스타일링을 위한 클래스명 */
  className?: string;
}

/**
 * LoadingBar (Atoms)
 * - GPU 가속이 적용된 SVG 기반 무한 루프 스피너
 * - 멈춤 현상 없는 완전한 등속 회전 (1.2s linear)
 * - @param size: 크기 조절
 */
export const LoadingBar = ({ size = 40, className }: LoadingBarProps) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        width={size}
        height={size}
        style={{ 
          willChange: 'transform',
          transformOrigin: 'center',
          /* [변경] 가감속을 제거한 linear 설정으로 멈춤 현상 없는 무한 회전 구현 */
          animation: 'spin-linear 1.2s linear infinite',
        }}
      >
        <style>
          {`
            @keyframes spin-linear {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
        {/* 원본 SVG 구조 유지 */}
        <circle cx="52.0833" cy="12" r="11.4583" fill="#262626" />
        <ellipse cx="52.0827" cy="92.8572" rx="7.29167" ry="7.14286" fill="#A3A3A3" />
        <ellipse
          cx="9.375"
          cy="52.0408"
          rx="9.18367"
          ry="9.375"
          transform="rotate(-90 9.375 52.0408)"
          fill="#525252"
        />
        <ellipse
          cx="93.75"
          cy="52.0408"
          rx="6.12245"
          ry="6.25"
          transform="rotate(-90 93.75 52.0408)"
          fill="#E5E5E5"
        />
        <circle
          cx="22.4673"
          cy="23.3622"
          r="10.1595"
          transform="rotate(-45 22.4673 23.3622)"
          fill="#404040"
        />
        <circle
          cx="7.14006"
          cy="7.14006"
          r="7.14006"
          transform="matrix(0.714359 -0.69978 0.714359 0.69978 71.1934 80.5415)"
          fill="#D4D4D4"
        />
        <circle
          cx="8.38448"
          cy="8.38448"
          r="8.38448"
          transform="matrix(-0.714359 -0.69978 0.714359 -0.69978 21.7324 92.9977)"
          fill="#737373"
        />
        <circle
          cx="5.9964"
          cy="5.9964"
          r="5.9964"
          transform="matrix(-0.714359 -0.69978 0.714359 -0.69978 81.3926 31.2109)"
          fill="#F4F4F4"
        />
      </svg>
    </div>
  );
};