import React, { useState } from 'react';
import { Stepper } from './Stepper';
// import { QuestionGroup } from './QuestionGroup'; // 실제 파일 경로에 맞춰 임포트

export const StepperPreview = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-10 bg-da-bg1 min-h-screen space-y-12">
      {/* 1. Stepper 상태별 확인 섹션 */}
      <section>
        <h2 className="text-da-t-title font-bold mb-6 text-[20px]">Stepper States</h2>
        <div className="space-y-8 bg-da-white p-6 rounded-lg border border-da-divider-content-line">
          <div>
            <p className="text-da-t-discription mb-2 text-[14px]">Step 01: 탐색 단계</p>
            <Stepper currentStep={1} />
          </div>
          <div>
            <p className="text-da-t-discription mb-2 text-[14px]">Step 02: 구체화 단계</p>
            <Stepper currentStep={2} />
          </div>
          <div>
            <p className="text-da-t-discription mb-2 text-[14px]">Step 03: 정교화 단계</p>
            <Stepper currentStep={3} />
          </div>
        </div>
      </section>

    </div>
  );
};