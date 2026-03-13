import React, { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { Icon } from '@/components/atoms/Icon/Icon'

export interface ModalProps {
  /** 표시 여부 */
  open: boolean
  /** 닫기 핸들러 (배경/닫기 버튼 모두 이 핸들러를 사용) */
  onClose?: () => void
  /** 타이틀 영역 (옵션) */
  title?: React.ReactNode
  /** 본문 영역 */
  children: React.ReactNode
  /** 하단 영역 (버튼 등) */
  footer?: React.ReactNode
  /** 모달 카드에 추가 클래스 */
  className?: string
  /** 콘텐츠 스크롤 영역 클래스 */
  contentClassName?: string
  /** 오버레이 클래스 */
  overlayClassName?: string
  /** 오버레이 클릭으로 닫기 금지 */
  disableOverlayClose?: boolean
  /** 포털 사용 여부 (테스트 용도) */
  disablePortal?: boolean
}

const ModalCard = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      children,
      footer,
      className,
      contentClassName,
      overlayClassName,
      disableOverlayClose,
      disablePortal,
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false)
    const titleId = useId().replace(/:/g, '')

    useEffect(() => setMounted(true), [])

    // Body 스크롤 잠금
    useEffect(() => {
      if (!mounted) return
      if (!open) return
      const { overflow } = document.body.style
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = overflow
      }
    }, [mounted, open])

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disableOverlayClose) return
      if (event.target !== event.currentTarget) return
      onClose?.()
    }

    const card = (
      <div
        className={clsx(
          'fixed inset-0 z-[60] flex items-start justify-center',
          'pt-[60px] px-[24px]',
          'bg-[rgba(0,0,0,0.30)]',
          overlayClassName,
        )}
        onClick={handleOverlayClick}
      >
        <div className="w-full flex justify-center">
          <div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            className={clsx(
              'relative w-full max-w-[1440px] min-w-[1000px]',
              'bg-da-white text-da-t-body rounded-[16px]',
              'max-h-[calc(100vh-100px)] overflow-hidden',
              className,
            )}
          >
            {onClose && (
              <button
                type="button"
                aria-label="닫기"
                onClick={onClose}
                className={clsx(
                  'absolute right-[24px] top-[8px]',
                  'h-[24px] w-[24px] flex items-center justify-center',
                  'transition-colors duration-150',
                )}
              >
                <Icon name="close" ghost={true} size='md' tone='gray' />
              </button>
            )}

            {/* 모달 본문 */}
            <div data-compoent="modal-contain" className="flex h-full flex-col px-[40px] pt-[40px]">
              {title && (
                <div data-compoent="modal-title" id={titleId} className="text-da-h2 font-bold text-da-t-title">
                  {title}
                </div>
              )}

              <div data-compoent="modal-body" className='overflow-y-auto custom-scrollbar'>
                <div
                   data-compoent="modal-body-inner"
                  className={clsx(
                    'flex-1 text-da-b1 leading-relaxed',
                    contentClassName,
                  )}
                >
                  {children}
                </div>

                {footer && <div data-compoent="modal-footer" className="mt-8 pb-[40px]">{footer}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    if (!open) return null
    if (!disablePortal && !mounted) return null
    if (disablePortal) return card
    return createPortal(card, document.body)
  },
)

ModalCard.displayName = 'Modal'

export const Modal = ModalCard
