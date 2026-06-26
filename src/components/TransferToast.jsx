import { useState, useEffect, useRef } from 'react'

/**
 * TransferToast — fires whenever bento↔accordion context transfer happens.
 * Shows: direction, transferred index, feature name, mechanism used.
 * Triggered via fireTransferToast() — zero coupling to parent tree.
 */

const toastListeners = new Set()

export function fireTransferToast(payload) {
  toastListeners.forEach(fn => fn(payload))
}

export default function TransferToast() {
  const [toast, setToast]     = useState(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const handler = (payload) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      setToast(payload)
      setVisible(true)
      timerRef.current = setTimeout(() => {
        setVisible(false)
        timerRef.current = setTimeout(() => setToast(null), 400)
      }, 3200)
    }
    toastListeners.add(handler)
    return () => {
      toastListeners.delete(handler)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  if (!toast) return null

  const toMobile = toast.direction === 'desktop→mobile'

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '16px'})`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 260ms cubic-bezier(0,0,0.2,1), transform 260ms cubic-bezier(0,0,0.2,1)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div style={{
        background: '#0D1B21',
        border: '1px solid rgba(255,200,1,0.28)',
        borderRadius: '14px',
        padding: '13px 16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,1,0.06)',
        maxWidth: '360px',
        width: 'max-content',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Icon */}
        <div style={{
          width: '34px', height: '34px', borderRadius: '9px',
          background: 'rgba(255,200,1,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {toMobile ? (
              /* mobile phone icon */
              <>
                <rect x="4" y="1" width="8" height="14" rx="2" stroke="#FFC801" strokeWidth="1.2"/>
                <circle cx="8" cy="12.5" r="0.75" fill="#FFC801"/>
              </>
            ) : (
              /* desktop monitor icon */
              <>
                <rect x="1" y="2" width="14" height="9" rx="1.5" stroke="#FFC801" strokeWidth="1.2"/>
                <path d="M5 13h6M8 11v2" stroke="#FFC801" strokeWidth="1.2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </div>

        {/* Text */}
        <div>
          {/* Label row */}
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            color: '#FFC801',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span
              style={{
                display: 'inline-block',
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: '#FFC801',
                animation: 'pulse-ring 1.5s ease-in-out infinite',
              }}
            />
            Context Transfer · {toast.direction}
          </div>

          {/* Main message */}
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#F1F6F4',
            lineHeight: 1.45,
          }}>
            Panel{' '}
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              color: '#FFC801',
              background: 'rgba(255,200,1,0.1)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '12px',
            }}>#{toast.index}</span>
            {' '}
            <span style={{ color: '#D9E8E2', fontStyle: 'italic' }}>"{toast.featureName}"</span>
            {' '}→{' '}
            <span style={{ color: '#FF9932', fontWeight: 600 }}>
              {toMobile ? 'accordion' : 'bento grid'}
            </span>
          </div>

          {/* Mechanism footnote */}
          <div style={{
            marginTop: '5px',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            color: 'rgba(217,232,226,0.38)',
          }}>
            ResizeObserver · breakpoint crossed at 768px
          </div>
        </div>

        {/* Drain bar */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '2px',
          background: 'rgba(255,200,1,0.12)',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #FFC801, #FF9932)',
            animation: visible ? 'toast-drain 3.2s linear forwards' : 'none',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes toast-drain {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}
