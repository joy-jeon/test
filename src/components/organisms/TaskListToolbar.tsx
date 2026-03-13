import React, { useEffect, useMemo, useRef, useState } from 'react';
import ComboSelect from '@/components/atoms/Input/ComboSelect';
import ComboList from '@/components/atoms/Input/ComboList';
import { Button } from '@/components/atoms/Button/Button';
import { Icon, IconName } from '@/components/atoms/Icon/Icon';
import { cn } from '@/lib/utils';

// 필터 UI에 사용할 옵션 구조
export interface TaskFilter {
  label: string;
  placeholder?: string;
  value?: string;
}

// 상태 집계 뱃지에 사용할 구조
export interface TaskStatusStat {
  key: 'progress' | 'candidate' | 'drop';
  label: string;
  count: number;
  icon: IconName;
}

interface TaskListToolbarProps {
  title: string;
  filters: TaskFilter[];
  totalCount: number;
  stats: TaskStatusStat[];
  onSearch?: () => void;
  onCreate?: () => void;
}

const TaskListToolbar = ({
  title,
  filters,
  totalCount,
  stats,
  onSearch,
  onCreate,
}: TaskListToolbarProps) => {
  // 콤보박스 열림 상태와 선택값 관리 (실데이터 연동 전 임시 구현)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedMap, setSelectedMap] = useState<Record<string, string>>({});
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 외부 영역 클릭 시 열림 상태 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openIndex === null) return;
      const currentWrapper = wrapperRefs.current[openIndex];
      if (currentWrapper && !currentWrapper.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openIndex]);

  // TODO: API 연동 시 실제 옵션으로 교체
  const filterOptions = useMemo(
    () => ({
      회사명: [
        { label: 'LG전자', value: 'lge' },
        { label: 'LG디스플레이', value: 'lgd' },
        { label: 'LG이노텍', value: 'lgi' },
      ],
      본부명: [
        { label: 'HS본부', value: 'hs' },
        { label: 'BS본부', value: 'bs' },
        { label: 'CS본부', value: 'cs' },
      ],
      상태: [
        { label: '후보', value: 'candidate' },
        { label: '진행', value: 'progress' },
        { label: '중단', value: 'drop' },
      ],
    }),
    []
  );

  const getDisplayValue = (label: string) => {
    const value = selectedMap[label];
    const options = filterOptions[label as keyof typeof filterOptions] ?? [];
    return options.find((opt) => opt.value === value)?.label;
  };

  const handleChange = (label: string, next: string[]) => {
    setSelectedMap((prev) => ({ ...prev, [label]: next[0] }));
    setOpenIndex(null);
  };

  return (
    <div data-component="task-list-toolbar" className="flex w-full flex-col gap-4">
      {/* 1행: 제목(좌) + 필터/조회 영역(우). md 폭에서 부족하면 우측 영역이 줄바꿈되도록 flex-wrap 적용 */}
      <div data-component="toolbar-title-wrap" className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between md:ml-auto">
        <h1 data-component="panel-left" className="text-da-h1 font-black text-da-t-title">{title}</h1>

        {/* 필터 컨테이너: 개별 필터+라벨 묶음. 좁은 화면에서 자연스럽게 개행되도록 flex-wrap */}
        <div data-component="panel-right" className="flex w-full gap-[8px] sm:flex-row sm:items-center md:w-auto md:flex-wrap">
         
         {/* 콤보 group */}
          <div data-component="combo-contain" className='flex gap-[24px]'>
            {filters.map((filter, idx) => (
              <label key={filter.label} className="flex items-center min-w-[200px] gap-[16px] text-da-b2 text-da-t-body">
                <span className="flex flex-shrink-0 font-bold text-da-t-title">{filter.label}</span>
                <div
                  className="relative min-w-[180px]"
                  ref={(el) => {
                    wrapperRefs.current[idx] = el;
                  }}
                >
                  <ComboSelect
                    placeholder={filter.placeholder ?? '선택하세요'}
                    displayValue={getDisplayValue(filter.label) || filter.value}
                    status="editable"
                    isFullWidth
                    className="min-w-[180px]"
                    isOpen={openIndex === idx}
                    onToggle={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                  />

                  {openIndex === idx && (
                    <div className="absolute left-0 top-[42px] z-20 w-full">
                      <ComboList
                        variant="checkmark"
                        options={filterOptions[filter.label as keyof typeof filterOptions] ?? []}
                        selected={selectedMap[filter.label] ? [selectedMap[filter.label]] : []}
                        onChange={(next) => handleChange(filter.label, next)}
                      />
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>


          <>
            <Button
              variant="primarySolid"
              size="md"
              leftIcon={<Icon name="search" size="sm" />}
              className="w-full sm:w-auto"
              onClick={onSearch}
            >
              조회
            </Button>
          </>
        </div>
      </div>




      {/* 2행: 집계 정보(좌) + 과제등록 버튼(우). md 폭에서도 공간 부족 시 개행 지원 */}
      <div data-component="toolbar-condition-wrap"  className="flex justify-end flex-col gap-[40px] md:flex-row md:flex-wrap md:items-center ">

        {/* 집계 표시 영역: 전체 건수 + 상태칩 */}
        <div data-component="condition-contain" className="flex flex-wrap items-center text-da-b2 text-da-t-body">
          {stats.map(({ key, label, count, icon }, index) => (
            <React.Fragment key={key}>
              <div className="flex items-center gap-da-space-sm">
                <Icon name={icon} size="sm" className="text-da-icon-gray" />
                <span>{label}</span>
                <span className="font-bold text-da-primary">{count}</span>
              </div>

              {index < stats.length - 1 && (
                <span
                  aria-hidden
                  className="mx-4 inline-block h-[12px] w-px bg-da-divider-content-line"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 우측 액션 버튼: 공간이 부족하면 다음 줄로 내려가도록 flex-wrap에 따라 동작 */}
        <div data-component="btn-contain">
          <Button variant="generate" size="generateMd" leftIcon={<Icon name="ai" size="md" />}>
            과제등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskListToolbar;
