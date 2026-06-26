import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768 // px — md in Tailwind

/**
 * Returns true when viewport width is below MOBILE_BREAKPOINT.
 * Uses ResizeObserver on <html> — single observer, no polling.
 */
export function useBreakpoint() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setIsMobile(entry.contentRect.width < MOBILE_BREAKPOINT)
    })
    ro.observe(document.documentElement)
    return () => ro.disconnect()
  }, [])

  return { isMobile, MOBILE_BREAKPOINT }
}
