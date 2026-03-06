import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../Icon/Icon";
import React from "react";

/**
 * 아이콘 선택을 위한 매핑 객체
 * 스토리북 컨트롤러에서 이름으로 아이콘을 선택할 수 있게 합니다.
 */
const iconOptions = {
  None: undefined,
  AI: <Icon name="ai" size={20} />,       
  Search: <Icon name="search" size={20} />,
  Plus: <Icon name="plus" size={20} />,
  Setting: <Icon name="setting" size={20} />,
  Calendar: <Icon name="calendar" size={20} />,
};

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primarySolid", "primaryLine", "secondarySolid", "secondaryLine", "generate", "icon", "iconSolid", "iconLine"],
      description: "버튼의 스타일 변형을 선택합니다.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "iconSm", "iconMd", "generateSm", "generateMd", "generateLg", "generateXlg"],
      description: "버튼의 크기를 선택합니다.",
    },
    leftIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "select" },
      description: "좌측에 표시될 아이콘입니다.",
    },
    rightIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "select" },
      description: "우측에 표시될 아이콘입니다.",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태 여부입니다.",
    },
  },
  args: {
    variant: "primarySolid",
    size: "md",
    children: "Button",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 1. Disabled 상태와 좌측 아이콘 추가 케이스
 * 요구사항에 따라 비활성화된 버튼에 좌측 아이콘이 포함된 시나리오입니다.
 */
export const DisabledWithLeftIcon: Story = {
  args: {
    variant: "primarySolid",
    size: "md",
    leftIcon: "AI" as any, // mapping의 Key값 사용
    children: "비활성 과제생성",
    disabled: true,
  },
};

/**
 * 2. 활성 상태의 좌측 아이콘 추가 케이스
 */
export const ActiveWithLeftIcon: Story = {
  args: {
    variant: "secondarySolid",
    size: "md",
    leftIcon: "Search" as any,
    children: "검색하기",
    disabled: false,
  },
};

/**
 * 3. Generate 타입 (좌측 아이콘 필수 명세)
 */
export const Generate: Story = {
  args: {
    variant: "generate",
    size: "generateSm",
    leftIcon: "AI" as any,
    children: "과제생성",
  },
};