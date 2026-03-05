import React from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'
import { ICON_RAW_MAP, type IconRawName } from './iconRaw'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export type IconName = IconRawName | 'closeCircleFill' | 'aiGenerate60Animated'

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
  name: IconName
  size?: number
  color?: string
  hoverColor?: string
}

const ICON_60_STATE_SET = new Set<IconName>(['stateNotFound60', 'stateNodata60', 'state3_60'])
const DEFAULT_ICON_SIZE = 24

const isIconRawName = (name: IconName): name is IconRawName => {
  return Object.prototype.hasOwnProperty.call(ICON_RAW_MAP, name)
}

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

const getViewBox = (name: IconName): string => {
  if (name === 'closeCircleFill') {
    return '0 0 16 16'
  }

  if (name === 'aiGenerate60Animated') {
    return '0 0 60 60'
  }

  if (isIconRawName(name)) {
    return ICON_RAW_MAP[name].viewBox
  }

  return '0 0 24 24'
}

const Icon = ({
  name,
  size,
  className,
  color,
  hoverColor,
  style,
  ...props
}: IconProps) => {
  const isState60Icon = ICON_60_STATE_SET.has(name)
  const resolvedSize = size ?? DEFAULT_ICON_SIZE
  const resolvedColor = color ?? (isState60Icon ? '#C4CCD3FF' : 'currentColor')
  const resolvedHoverColor = hoverColor ?? resolvedColor
  const iconStyle = {
    ...style,
    width: resolvedSize,
    height: resolvedSize,
    '--icon-color': resolvedColor,
    '--icon-hover-color': resolvedHoverColor,
  } as React.CSSProperties
  const scopeId = React.useId().replace(/[:]/g, '')

  return (
    <svg
      className={cn(
        'inline-block shrink-0',
        'text-[var(--icon-color)] transition-colors duration-150 group-hover:text-[var(--icon-hover-color)]',
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

const renderIcon = (name: IconName, scopeId: string): React.ReactNode => {
  if (isIconRawName(name)) {
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
    case 'aiGenerate60Animated': {
      const maskId = `${scopeId}-ai60-mask`
      const flowGradientId = `${scopeId}-ai60-flow-grad`
      const glowGradientId = `${scopeId}-ai60-glow-grad`

      return (
        <>
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7885 41.3143L16.0513 34.5258H18.8974L21.1602 41.3143L27.9487 43.5771V46.4232L21.1602 48.686L18.8974 55.4745H16.0513L13.7885 48.686L7 46.4232V43.5771L13.7885 41.3143Z"
                fill="white"
              />
              <path
                d="M33.2364 5.00015C33.0809 4.99992 32.9218 5 32.7585 5.00008L32.5199 5.00015H33.2364Z"
                fill="white"
              />
              <path
                d="M32.4743 5.00016L26.8711 5.00016C24.8587 5.00012 23.1978 5.0001 21.8448 5.11064C20.4395 5.22545 19.1478 5.47187 17.9344 6.09009C16.0528 7.04883 14.523 8.57863 13.5643 10.4603C12.9461 11.6736 12.6996 12.9654 12.5848 14.3706C12.4743 15.7236 12.4743 17.3845 12.4743 19.3969V30.0002H21.2243L23.7243 37.5002L32.4743 40.0002V50.0002H38.0777C40.0901 50.0002 41.7509 50.0002 43.1039 49.8897C44.5092 49.7749 45.8009 49.5285 47.0143 48.9102C48.8959 47.9515 50.4257 46.4217 51.3844 44.5401C52.0026 43.3267 52.2491 42.035 52.3639 40.6297C52.4744 39.2767 52.4744 37.6159 52.4743 35.6035V25.0002H34.9743C33.5936 25.0002 32.4743 23.8809 32.4743 22.5002V5.00016Z"
                fill="white"
              />
              <path
                d="M52.4743 24.9707L52.4744 24.716C52.4745 24.5515 52.4746 24.3912 52.4743 24.2347V24.9707Z"
                fill="white"
              />
              <path
                d="M51.9796 20.0002C51.7374 19.2591 51.409 18.5481 51.0007 17.8818C50.3792 16.8675 49.5306 16.0197 48.4076 14.8977L42.5768 9.06698C41.4548 7.9439 40.607 7.09533 39.5927 6.47376C38.9264 6.06545 38.2154 5.73714 37.4743 5.49495V20.0002H51.9796Z"
                fill="white"
              />
            </mask>

            <linearGradient id={flowGradientId} x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#687AE6" />
              <stop offset="18%" stopColor="#9CA8FF" />
              <stop offset="36%" stopColor="#D867BF" />
              <stop offset="54%" stopColor="#7B8AF0" />
              <stop offset="72%" stopColor="#D867BF" />
              <stop offset="90%" stopColor="#9CA8FF" />
              <stop offset="100%" stopColor="#687AE6" />
            </linearGradient>

            <linearGradient id={glowGradientId} x1="-40" y1="110" x2="110" y2="-40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.36)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <g mask={`url(#${maskId})`} className="origin-center [animation:icon60AISoftFloat_7s_ease-in-out_infinite]">
            <g transform="rotate(-28 30 30)" className="[animation:icon60FlowTile_3.6s_linear_infinite]">
              <rect x="-260" y="-180" width="260" height="420" fill={`url(#${flowGradientId})`} />
              <rect x="0" y="-180" width="260" height="420" fill={`url(#${flowGradientId})`} />
            </g>
            <g transform="rotate(-28 30 30)" className="[animation:icon60FlowTileSlow_6.4s_linear_infinite]">
              <rect x="-260" y="-180" width="260" height="420" fill={`url(#${glowGradientId})`} opacity="0.6" />
              <rect x="0" y="-180" width="260" height="420" fill={`url(#${glowGradientId})`} opacity="0.6" />
            </g>
          </g>
        </>
      )
    }
    default:
      return null
  }
}

export { Icon }
