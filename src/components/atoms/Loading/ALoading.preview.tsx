import React from 'react';
import { Loading } from './ALoading';

/**
 * LoadingBar Preview
 * - 가감속 애니메이션(Easing)이 적용된 로딩 바의 시각적 검증
 */
export const LoadingPreview = () => {
  return (
    <div className="p-10 flex flex-col gap-10 bg-da-bg1">
      <section>
        <h2 className="text-da-h2 mb-4 text-da-t-title">Default Loading (40px)</h2>
        <div className="flex items-center gap-4">
          {/* 변경된 애니메이션이 적용된 기본 컴포넌트 */}
          <Loading />
        </div>
      </section>

      <section>
        <h2 className="text-da-h2 mb-4 text-da-t-title">Size Variations</h2>
        <div className="flex items-end gap-8">
          <Loading size={24} />
          <Loading size={60} />
          <Loading size={80} />
        </div>
      </section>
      
    </div>
  );
};

export default LoadingPreview;
