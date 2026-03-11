import React, { useId, useEffect } from 'react' // useEffect 추가
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'
import { motion, animate } from 'framer-motion' // Framer Motion import
import { ICON_RAW_MAP, type IconRawName } from './iconRaw'
import { useRef } from 'react'


const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * 아이콘 사이즈 및 톤(Color) 규격화 정의
 */
const iconVariants = cva('inline-block shrink-0 transition-colors duration-150', {
  variants: {
    size: {
      sm: 'w-4 h-4',       // 16px
      md: 'w-6 h-6',       // 24px
      lg: 'w-[3.75rem] h-[3.75rem]', // 60px
    },
    tone: {
      white: 'text-da-white',
      gray: 'text-da-icon-gray group-hover:text-da-icon-gray-hover group-active:text-da-icon-gray-hover',
      notice:'text-da-lg-red3',
      primary: 'text-da-t-primary',
      disabled: 'text-da-t-disabled',
      positive: 'text-da-t-positive',
    },
    ghost: {
      true: 'cursor-pointer p-0 hover:bg-da-bg2 rounded',
      false: 'cursor-default p-0'
    }
  },
  defaultVariants: {
    size: 'md',
    ghost: false
  },
})

// 새로운 애니메이션 아이콘 이름 추가
export type IconName = IconRawName | 'closeCircleFill' | 'aiAnimated'
export type IconSize = 'sm' | 'md' | 'lg' | number

// VariantProps에서 size를 제외(Omit)하고 다시 정의합니다.
interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color'>,
    Omit<VariantProps<typeof iconVariants>, 'size'> {
  name: IconName
  size?: IconSize 
  color?: string
  hoverColor?: string
}

const ICON_60_STATE_SET = new Set<IconName>(['stateNotFound60', 'stateNodata60', 'state3_60'])

const isIconRawName = (name: IconName): name is IconRawName => {
  return Object.prototype.hasOwnProperty.call(ICON_RAW_MAP, name)
}

// getViewBox 함수 업데이트
const getViewBox = (name: IconName): string => {
  if (name === 'closeCircleFill') return '0 0 16 16'
  if (name === 'aiAnimated') return '0 0 60 60'
  if (isIconRawName(name)) return ICON_RAW_MAP[name].viewBox
  return '0 0 24 24'
}

const Icon = ({ name, size = 'md', className, tone, color, hoverColor, ghost, style, ...props }: IconProps) => {
  const isLgAnimatedIcon = name === 'aiAnimated'
  const isSemanticSize = typeof size === 'string' && ['sm', 'md', 'lg'].includes(size)
  
  // 1. tone이 없으면 강제로 'gray'를 넣지 않고 undefined로 두어 CVA 클래스 주입을 방지합니다.
  const resolvedTone = tone

  const iconStyle = {
    ...style,
    ...(!isSemanticSize ? { width: size, height: size } : {}),
    ...(resolvedTone
      ? {}
      : {
          // 2. color가 없으면 'currentColor'를 기본으로 하여 부모의 text-color를 그대로 상속받습니다.
          '--icon-color': color ?? 'currentColor',
          '--icon-hover-color': hoverColor ?? color ?? 'currentColor',
        }),
  } as React.CSSProperties

  const scopeId = useId().replace(/[:]/g, '')

  return (
    <svg
      suppressHydrationWarning
      className={cn(
        iconVariants({ 
          size: isSemanticSize ? (size as 'sm' | 'md' | 'lg') : (name === 'aiAnimated' ? 'lg' : undefined), // Flow 애니메이션은 lg로 고정
          tone: resolvedTone, 
          ghost
        }),
        !tone && 'text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)]',
        className
      )}
      viewBox={getViewBox(name)}
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={iconStyle}
      {...props}
    >
      {renderIcon(name, scopeId)}
    </svg>
  )
}

// scopeSvgBody 함수는 동일
const scopeSvgBody = (body: string, scope: string): string => {
  const ids = Array.from(body.matchAll(/id="([^"]+)"/g)).map((m) => m[1])
  if (!ids.length) return body

  let scoped = body
  ids.forEach((id) => {
    const next = `${scope}-${id}`
    scoped = scoped.split(`id="${id}"`).join(`id="${next}"`)
    scoped = scoped.split(`url(#${id})`).join(`url(#${next})`)
    scoped = scoped.split(`href="#${id}"`).join(`href="#${next}"`)
    scoped = scoped.split(`xlink:href="#${id}"`).join(`xlink:href="#${next}"`)
  })

  return scoped
}

const renderIcon = (name: IconName, scopeId: string): React.ReactNode => {
  if (isIconRawName(name)) {
    // raw SVG 스코핑 로직
    return <g dangerouslySetInnerHTML={{ __html: scopeSvgBody(ICON_RAW_MAP[name].body, `${scopeId}-${name}`) }} />
  }

  switch (name) {
    case 'closeCircleFill':
      return (
        <>
          <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="currentColor" />
          <path d="M4.26732 12.6666L3.33398 11.7333L7.06732 7.99998L3.33398 4.26665L4.26732 3.33331L8.00065 7.06665L11.734 3.33331L12.6673 4.26665L8.93398 7.99998L12.6673 11.7333L11.734 12.6666L8.00065 8.93331L4.26732 12.6666Z" fill="white" />
        </>
      )
    // Step 2-1: 새로운 Framer Motion 기반 애니메이션 로직 추가
    case 'aiAnimated': {
      const gradientId = `${scopeId}-flow-grad`
      const maskId = `${scopeId}-flow-mask`
      const stopRef1 = useRef<SVGStopElement>(null)
      const stopRef2 = useRef<SVGStopElement>(null)
      const stopRef3 = useRef<SVGStopElement>(null)

      useEffect(() => {
        const stops = [stopRef1.current, stopRef2.current, stopRef3.current]
        if (!stops[0] || !stops[1] || !stops[2]) return
    
        const duration = 3 // 흐르는 속도
        const ease = "linear"
        const ani1 = '#687AE6' // Ani/Ani1
        const ani2 = '#D867BF' // Ani/Ani2
        const ani3 = '#9CA8FF' // Ani/Ani3
    
        // 각 Stop의 시작 컬러를 다르게 설정하여 3가지 색이 동시에 보이게 함
        // 1번 Stop: 1 -> 2 -> 3
        animate(stops[0]!, { stopColor: [ani1, ani2, ani3, ani1] }, { duration, ease, repeat: Infinity })
        // 2번 Stop: 2 -> 3 -> 1
        animate(stops[1]!, { stopColor: [ani2, ani3, ani1, ani2] }, { duration, ease, repeat: Infinity })
        // 3번 Stop: 3 -> 1 -> 2
        animate(stops[2]!, { stopColor: [ani3, ani1, ani2, ani3] }, { duration, ease, repeat: Infinity })
      }, [])
    
      return (
        <g transform="translate(7, 4.5)"> {/* 60x60 중앙 정렬을 위한 보정 */}
          <defs>
            <linearGradient id={gradientId} x1="1" y1="1" x2="0" y2="0">
              <stop ref={stopRef1} offset="0%" />
              <stop ref={stopRef2} offset="50%" />
              <stop ref={stopRef3} offset="100%" />
            </linearGradient>
            
            <mask id={maskId}>
              <g fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.78849 36.3143L9.05132 29.5258H11.8974L14.1602 36.3143L20.9487 38.5771V41.4232L14.1602 43.686L11.8974 50.4745H9.05132L6.78849 43.686L0 41.4232V38.5771L6.78849 36.3143Z" />
                <path d="M26.2364 0.000152588C26.0809 -7.61626e-05 25.9218 -4.42116e-07 25.7585 7.72265e-05L25.5199 0.000152588H26.2364Z" />
                <path d="M25.4743 0.000157687L19.8711 0.000156501C17.8587 0.000124612 16.1978 9.83849e-05 14.8448 0.110642C13.4395 0.225455 12.1478 0.471865 10.9344 1.09009C9.05282 2.04883 7.52301 3.57863 6.56428 5.46025C5.94605 6.67359 5.69964 7.96535 5.58483 9.37059C5.47429 10.7236 5.47431 12.3845 5.47434 14.3969V25.0002H14.2243L16.7243 32.5002L25.4743 35.0002V45.0002H31.0777C33.0901 45.0002 34.7509 45.0002 36.1039 44.8897C37.5092 44.7749 38.8009 44.5285 40.0143 43.9102C41.8959 42.9515 43.4257 41.4217 44.3844 39.5401C45.0026 38.3267 45.2491 37.035 45.3639 35.6297C45.4744 34.2767 45.4744 32.6159 45.4743 30.6035V20.0002H27.9743C26.5936 20.0002 25.4743 18.8809 25.4743 17.5002V0.000157687Z" />
                <path d="M45.4743 19.9707L45.4744 19.716C45.4745 19.5515 45.4746 19.3912 45.4743 19.2347V19.9707Z" />
                <path d="M44.9796 15.0002C44.7374 14.2591 44.409 13.5481 44.0007 12.8818C43.3792 11.8675 42.5306 11.0197 41.4076 9.89773L35.5768 4.06698C34.4548 2.9439 33.607 2.09533 32.5927 1.47376C31.9264 1.06545 31.2154 0.73714 30.4743 0.494946V15.0002H44.9796Z" />
              </g>
            </mask>
          </defs>
    
          <motion.rect 
            width="46" height="51" // SVG 원본 사이즈에 맞춤
            fill={`url(#${gradientId})`} 
            mask={`url(#${maskId})`}
            animate={{ y: [0, -3, 0] }} // 둥둥이는 효과 조정 
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          />
        </g>
      )
    }
    default:
      return null
  }
}

export { Icon }