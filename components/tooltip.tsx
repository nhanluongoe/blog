'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export interface TooltipProps {
  children: React.ReactNode
  targetRect: {
    left: number
    top: number
    right: number
    bottom: number
  } | null
}

export default function EffectTooltip({ children, targetRect }: TooltipProps) {
  const ref = useRef<HTMLElement>(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  // This artificially slows down rendering
  const now = performance.now()
  while (performance.now() - now < 100) {
    // Do nothing for a bit...
  }

  useEffect(() => {
    if (ref.current === null) return
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}

export function LayoutEffectTooltip({ children, targetRect }: TooltipProps) {
  const ref = useRef<HTMLElement>(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  // This artificially slows down rendering
  const now = performance.now()
  while (performance.now() - now < 100) {
    // Do nothing for a bit...
  }

  useLayoutEffect(() => {
    if (ref.current === null) return
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}

function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}
