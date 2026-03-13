import React from "react";
import { Modal } from "@/components/atoms/Modal/Modal";
import FormField from "@/components/molecules/Form/FormField";
import { Button } from "@/components/atoms/Button/Button";
import ButtonGroup from '@/components/molecules/ButtonGraoup/ButtonGroup';
import { Icon } from "@/components/atoms/Icon/Icon";
import { Divider } from "@/components/atoms/Divider/Divider";
import { Title } from "@/components/atoms/Font/Title";
import { ComboField } from "@/components/atoms/Input/Combo";
import InputText from "@/components/atoms/Input/InputText";

const companyOptions = [
  { label: "회사 A", value: "company-a" },
  { label: "회사 B", value: "company-b" },
  { label: "회사 C", value: "company-c" },
];

const goalTypeOptions = [
  { label: "신규매출확보", value: "신규매출확보" },
  { label: "비용절감", value: "비용절감" },
  { label: "시장점유율확대", value: "시장점유율확대" },
];

const yearOptions = Array.from({ length: 10 }, (_, i) => {
  const y = String(2024 + i);
  return { label: y, value: y };
});

const ModalGenerate = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const [company, setCompany] = React.useState<string[]>([]);
  const [goalType, setGoalType] = React.useState<string[]>(["신규매출확보"]);
  const [goalAmount, setGoalAmount] = React.useState("");
  const [goalYear, setGoalYear] = React.useState<string[]>([]);
  const [startYear, setStartYear] = React.useState<string[]>([]);
  const [commercialYear, setCommercialYear] = React.useState<string[]>([]);
  const [rdRows, setRdRows] = React.useState([{ year: [] as string[], amount: "" }]);

  const addRdRow = () => setRdRows(prev => [...prev, { year: [], amount: "" }]);
  const removeRdRow = (idx: number) => setRdRows(prev => prev.filter((_, i) => i !== idx));
  const updateRdYear = (idx: number, year: string[]) =>
    setRdRows(prev => prev.map((r, i) => i === idx ? { ...r, year } : r));
  const updateRdAmount = (idx: number, amount: string) =>
    setRdRows(prev => prev.map((r, i) => i === idx ? { ...r, amount } : r));

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      title={
        <Title
          level={2}
          as="h2"
          className="mb-[40px]"
          leftSlot={
            <Button variant="iconLine" aria-label="뒤로가기">
              <Icon name="arrow-left" size="md" />
            </Button>
          }
        >
          과제 생성
        </Title>
      }
      footer={
        <ButtonGroup align="right">
          <Button variant="secondaryLine" size="md">취소</Button>
          <Button variant="secondarySolid" size="md">등록</Button>
        </ButtonGroup>
      }
    >
      <div data-component="area-desc" className="flex flex-col gap-[40px] py-[10px]">

        <div data-component="section" className="flex flex-col gap-[24px]">
          {/* 1. 회사명 */}
          <FormField label="회사명" htmlFor="company-name" className="mb-[8px]">
            <ComboField
              variant="checkmark"
              options={companyOptions}
              value={company}
              onChange={setCompany}
              placeholder="선택하세요"
            />
          </FormField>

          {/* 2. 제안서 컨셉 및 방향 */}
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 flex items-center gap-[4px]">
              <Title 
                level={4} 
                as="div"
                leftSlot={
                  <Icon name="attentionFill" size="md" tone="gray" />
                }
              >
                  도움말
              </Title>
            </div>
            <FormField label="제안서 컨셉 및 방향" essential htmlFor="proposal-concept">
              <textarea
                id="proposal-concept"
                placeholder="입력하세요"
                className="h-[120px] w-full resize-none rounded-[8px] border border-da-form-input-line p-[16px] text-da-b2 outline-none focus:border-da-form-input-line-focus"
              />
            </FormField>
          </div>

        </div>

        <Divider />

        {/* 3. 재무 목표 (3열 그리드) */}
        <div data-component="section" className="grid grid-cols-3 gap-[24px]">
          <FormField label="재무 목표 유형" essential>
            <ComboField
              variant="checkmark"
              options={goalTypeOptions}
              value={goalType}
              onChange={setGoalType}
              placeholder="선택하세요"
            />
          </FormField>
          <FormField label="목표금액(억원)" essential>
            <InputText
              id="goal-amount"
              placeholder="입력하세요"
              value={goalAmount}
              onChange={e => setGoalAmount(e.target.value)}
              className=""
            />
          </FormField>
          <FormField label="목표 달성 연도" essential>
            <ComboField
              variant="checkmark"
              options={yearOptions}
              value={goalYear}
              onChange={setGoalYear}
              placeholder="선택하세요"
            />
          </FormField>
        </div>

        <Divider />

        {/* 4. 복합 레이아웃 섹션 */}
        <div data-component="section" className="flex gap-[24px]">

          {/* 왼쪽: 일정 및 비용 */}
          <div data-component="panel-left" className="grid grid-cols-2 gap-[24px] w-full">
            <div data-component="panel-left-col" className="flex flex-1 flex-col gap-[8px]">
              <div className="flex gap-[4px]">
                <FormField label="과제 시작 연도" layout="row" labelWidth="w-[130px]">
                  <ComboField
                    variant="checkmark"
                    options={yearOptions}
                    value={startYear}
                    onChange={setStartYear}
                    placeholder="선택하세요"
                  />
                </FormField>
              </div>

              <div className="flex items-start gap-[4px]">
                <div className="flex flex-1 flex-col gap-[20px]">
                  <FormField label="상용화 연도" layout="row" labelWidth="w-[130px]">
                    <ComboField
                      variant="checkmark"
                      options={yearOptions}
                      value={commercialYear}
                      onChange={setCommercialYear}
                      placeholder="선택하세요"
                    />
                  </FormField>
                </div>
              </div>
            </div>

            {/* R&D 비용 영역 */}
            <div data-component="panel-left-col" className="flex flex-1 flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <label className="text-da-b2 font-bold text-da-t-body">R&D 비용(억원)</label>
                <Button
                  variant="primarySolid"
                  size="sm"
                  leftIcon={<Icon name="plus" size="sm" />}
                  onClick={addRdRow}
                >
                  추가
                </Button>
              </div>
              <div className="flex flex-col gap-[8px]">
                {rdRows.map((row, idx) => (
                  <div key={idx} className="flex gap-[8px]">
                    <div className="w-[130px]">
                      <ComboField
                        variant="checkmark"
                        options={yearOptions}
                        value={row.year}
                        onChange={year => updateRdYear(idx, year)}
                        placeholder="연도선택"
                      />
                    </div>
                    <InputText
                      placeholder=""
                      value={row.amount}
                      onChange={e => updateRdAmount(idx, e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="iconLine" aria-label="삭제">
                      <Icon name="minus" size="md" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* 오른쪽: 파일 업로드 박스 */}
          <div data-component="panel-right" className="w-[600px] rounded-[16px] border border-da-form-input-line p-[24px] bg-da-white">
            <p className="mb-[24px] text-da-b1 text-da-t-body">
              *모든 파일은 PDF형식으로 파일당 30MB 미만으로만 업로드가능합니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-da-b2 font-bold text-da-t-body">WTA 평가 결과서</span>
              <div className="flex items-center gap-[12px]">
                <Button
                  variant="primarySolid"
                  size="sm"
                  leftIcon={<Icon name="fileDownUpload" size="sm" />}
                >
                  파일선택
                </Button>
                <span className="text-da-b4 text-da-t-placeholder">(0/-)</span>
              </div>
            </div>
          </div>
        </div>

        <Divider />

      </div>
    </Modal>
  );
};

export default ModalGenerate;
