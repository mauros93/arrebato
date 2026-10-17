import { useEffect, useState } from 'react'

export function useActiveSection(ids, offset) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0

      const doc = document.documentElement
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setActiveId(elements[elements.length - 1].id)
        return
      }

      let current = elements[0].id
      for (const element of elements) {
        if (element.getBoundingClientRect().top - offset <= 4) {
          current = element.id
        }
      }
      setActiveId(current)
    }

    const requestUpdate = () => {
      if (frame === 0) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [ids, offset])

  return activeId
}
