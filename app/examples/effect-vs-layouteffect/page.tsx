'use client'
import EffectTooltip, { LayoutEffectTooltip, TooltipProps } from '@/components/tooltip'
import { useRef, useState } from 'react'

export default function EffectVsLayoutEffectExample() {
  return (
    <div>
      <h1 className="mb-20 text-center text-3xl font-bold">useEffect vs useLayoutEffect</h1>
      <div className="flex h-full items-center justify-center gap-5">
        <ButtonWithEffectTooltip
          tooltipContent={
            <div>
              This tooltip does not fit above the button.
              <br />
              This is why it's displayed below instead!
            </div>
          }
        >
          Hover over me (tooltip above)
        </ButtonWithEffectTooltip>

        <ButtonWithLayoutEffectTooltip
          tooltipContent={
            <div>
              This tooltip does not fit above the button.
              <br />
              This is why it's displayed below instead!
            </div>
          }
        >
          Hover over me (tooltip above)
        </ButtonWithLayoutEffectTooltip>
      </div>
    </div>
  )
}

function ButtonWithEffectTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState<TooltipProps['targetRect']>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <button
        {...rest}
        className="rounded-md border px-2 py-1"
        ref={buttonRef}
        onPointerEnter={() => {
          if (buttonRef.current === null) return
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && (
        <EffectTooltip targetRect={targetRect}>{tooltipContent}</EffectTooltip>
      )}
    </>
  )
}

function ButtonWithLayoutEffectTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState<TooltipProps['targetRect']>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <button
        {...rest}
        className="rounded-md border px-2 py-1"
        ref={buttonRef}
        onPointerEnter={() => {
          if (buttonRef.current === null) return
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && (
        <LayoutEffectTooltip targetRect={targetRect}>{tooltipContent}</LayoutEffectTooltip>
      )}
    </>
  )
}
