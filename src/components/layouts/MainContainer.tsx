import React from 'react';
import clsx from 'clsx';

export interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  /** 최대 너비를 커스텀할 때 사용 (ex. max-w-[1440px]) */
  maxWidth?: string;
  /** 기본 좌우 패딩을 끄거나 다른 값으로 바꿀 때 사용 */
  paddingXClass?: string;
  /** 기본 상하 패딩을 끄거나 다른 값으로 바꿀 때 사용 (기본 40px ≒ py-10) */
  paddingYClass?: string;
  disablePadding?: boolean;
  disablePaddingX?: boolean;
  disablePaddingY?: boolean;
  /** 페이지별 배경색 제어 (우선순위: backgroundClass > backgroundVariant) */
  backgroundClass?: string;
  backgroundVariant?: 'white' | 'bg2';
}

export const MainContainer = ({
  children,
  className,
  innerClassName,
  maxWidth,
  paddingXClass,
  paddingYClass,
  disablePadding,
  disablePaddingX,
  disablePaddingY,
  backgroundClass,
  backgroundVariant,
}: MainContainerProps) => {
  const resolvedBackground = backgroundClass
    ?? (backgroundVariant === 'bg2' ? 'bg-da-bg2' : 'bg-da-white');
  const allowPaddingX = !disablePadding && !disablePaddingX;
  const allowPaddingY = !disablePadding && !disablePaddingY;
  return (
    <main
      data-component="main"
      className={clsx(
        'w-full min-h-[calc(100vh-60px)] overflow-x-auto',
        resolvedBackground,
        className,
      )}
    >
      <div
        data-component="main-inner"
        className={clsx(
          'mx-auto w-full',
          maxWidth ?? 'max-w-[1440px]',
          'min-w-[1000px]',
          allowPaddingX && (paddingXClass ?? 'px-da-space-md'),
          allowPaddingY && (paddingYClass ?? 'py-10'),
          innerClassName,
        )}
      >
        {children}
      </div>
    </main>
  );
};
