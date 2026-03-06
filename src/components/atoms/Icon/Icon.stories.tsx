import type { Meta, StoryObj } from '@storybook/react'
import { Icon, type IconName } from './Icon'
import React from 'react'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      description: '렌더링할 아이콘의 이름입니다.',
    },
    size: {
      control: 'inline-radio',
        description: '아이콘 크기 (단위: px)',
        options: [16, 24, 32, 60],
    },
    tone: {
      control: 'inline-radio',
      options: ['gray','white','inherit)'],
      description: '기본 Icon-Gray 색상이 적용됩니다. 미지정 시 부모의 색상을 상속 (e.g. 버튼)',
    },
  },
  // [Reviewer] useTone 시 'gray'가 디폴트가 되도록 설정
  args: {
    size: 24,
  },
}

export default meta
type Story = StoryObj<typeof Icon>

/**
 * Icon 60 (State) 및 일반 아이콘 통합 리스트
 */
const ICON_NAMES: IconName[] = [
  // Icon 60 (State) 추가
  'stateNotFound60',
  'stateNodata60',
  'state3_60',
  // 일반 아이콘 리스트
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down',
  'arrow1-left', 'arrow1-right', 'arrow1-up', 'arrow1-down',
  'plus', 'minus', 'close', 'checkSmall', 'sClose',
  'fileDown', 'fileDownUpload', 'clip', 'search', 'setting',
  'lock', 'unlock', 'calendar', 'delete', 'openNew',
  'info', 'infoFill', 'c', 'attention', 'attentionFill',
  'question', 'time', 'home', 'man', 'man1', 'copy',
  'closeCircle', 'siren', 'ai', 'doc', 'addPhoto',
  'building', 'chartLine', 'chartPie', 'next', 'ok',
  'aiPen', 'aiSquare', 'aiGenerate', 'image', 'aiCamera',
  'magicEraser', 'folder', 'folderUP', 'message', 'share',
  'hourglass', 'fileFailed', 'filter', 'rowMove',
]

export const Default: Story = {
  args: {
    name: 'ai',
  },
}

/**
 * 전수 검사용 갤러리
 */
export const AllIconsGallery: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[16px]">
      {ICON_NAMES.map((name) => {
        // [Reviewer] 60사이즈 아이콘은 가독성을 위해 개별 사이즈 적용 권장
        const is60Icon = name.endsWith('60');
        return (
          <div 
            key={name} 
            className="flex flex-col items-center justify-center p-[16px] border border-Divider-Content-Line rounded-[8px] hover:bg-Bg1 transition-colors group"
          >
            <div className="mb-[8px] flex items-center justify-center h-[64px]">
              <Icon {...args} name={name} size={is60Icon ? 60 : (args.size || 24)} />
            </div>
            <span className="text-DA-B4 text-T-Discription text-center break-all select-all font-mono">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  ),
}

// 특수 애니메이션 아이콘 별도 확인
export const AnimatedAI: Story = {
  args: {
    name: 'aiGenerate60Animated',
    size: 60,
    tone: undefined, // 애니메이션 아이콘은 자체 그라데이션 사용
  },
}