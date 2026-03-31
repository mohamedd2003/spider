import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const lerp = (a, b, n) => a + (b - a) * n

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15)
      cursor.style.transform = `translate3d(${pos.current.x - cursor.offsetWidth / 2}px, ${pos.current.y - cursor.offsetHeight / 2}px, 0)`
      raf.current = requestAnimationFrame(animate)
    }

    const addExpanded = () => cursor.classList.add('expanded')
    const removeExpanded = () => cursor.classList.remove('expanded')

    const bindHovers = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', addExpanded)
        el.addEventListener('mouseleave', removeExpanded)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    // Bind once + observe for DOM changes
    bindHovers()
    const observer = new MutationObserver(bindHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  // Hide on touch devices via CSS
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return <div ref={cursorRef} className="custom-cursor hidden lg:block" />
}
