import React from 'react';
import { Answer } from './Answer';

/**
 * Answer 컴포넌트 프리뷰
 * 'export default' 없이 Named Export 방식으로만 작성되었습니다.
 */
export const AnswerPreview = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
      {/* 1. 기본 텍스트 답변 케이스 */}
      <section>
        <h3 className="text-da-t-discription mb-4 text-[12px] font-bold uppercase tracking-wider">
          Default Text Answer
        </h3>
        <Answer>
          안녕하세요! 무엇을 도와드릴까요? 해당 질문에 대한 답변을 준비했습니다.
        </Answer>
      </section>

      {/* 2. 긴 텍스트 (줄바꿈 포함) 케이스 */}
      <section>
        <h3 className="text-da-t-discription mb-4 text-[12px] font-bold uppercase tracking-wider">
          Multi-line Answer
        </h3>
        <Answer>
          {`분석 결과, 다음 세 가지 핵심 포인트가 확인되었습니다:
1. 사용자 경험(UX) 최적화 필요
2. 데이터 시각화 라이브러리 도입 권장
3. 성능 개선을 위한 코드 스플리팅 적용`}
        </Answer>
      </section>

    </div>
  );
};