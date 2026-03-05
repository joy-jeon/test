import React from 'react';

// 폰트 스타일 리스트 (기존 설정 유지)
const FONT_LIST = [
  { id: 'DA-H1', name: 'Heading 1', size: '32px', lh: '100%', ls: '-0.64px' },
  { id: 'DA-H2', name: 'Heading 2', size: '24px', lh: '150%', ls: '-0.48px' },
  { id: 'DA-H3', name: 'Heading 3', size: '20px', lh: '150%', ls: '-0.4px' },
  { id: 'DA-B1', name: 'Body 1', size: '18px', lh: '150%', ls: '-0.36px' },
  { id: 'DA-B2', name: 'Body 2', size: '16px', lh: '150%', ls: '-0.32px' },
  { id: 'DA-B3', name: 'Body 3', size: '14px', lh: '150%', ls: '-0.28px' },
  { id: 'DA-B4', name: 'Body 4', size: '12px', lh: '150%', ls: '-0.24px' },
] as const;

const FontPreview = () => {
  return (
    <div className="p-8 bg-white text-black">
      {/* 제목 영역 */}
      <h1 className="mb-10 pb-4 border-b-2 border-gray-200 text-[24px] font-bold">
        Font System Preview
      </h1>

      <div className="space-y-12">
        {FONT_LIST.map((font) => (
          <div key={font.id} className="flex flex-col gap-2">
            {/* 폰트 정보 (메타데이터) */}
            <div className="flex items-center gap-4 text-gray-500 text-[11px] font-mono border-b border-gray-100 pb-1">
              <span className="font-bold text-indigo-600">[{font.id}]</span>
              <span>Size: {font.size}</span>
              <span>Line-Height: {font.lh}</span>
              <span>Letter-Spacing: {font.ls}</span>
            </div>

            {/* 실제 적용 미리보기 */}
            <div className={`text-${font.id} break-all`}>
              {font.name} - 다람쥐 헌 쳇바퀴에 타고파 12345
            </div>
            
            <p className={`text-${font.id} text-gray-600`}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontPreview;