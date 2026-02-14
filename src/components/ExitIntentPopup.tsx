'use client'

import { useState, useEffect } from 'react'
import { TippingPopup } from './TippingModal'

export default function ExitIntentPopup() {
  const [showTippingModal, setShowTippingModal] = useState(false)
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false)
  const [pendingLink, setPendingLink] = useState<string | null>(null)
  const [timeOnPage, setTimeOnPage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(t => t + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Detect mouse leaving from top (back button region)
    // Only trigger after 30 seconds on page
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered && timeOnPage >= 30) {
        setShowTippingModal(true)
        setExitIntentTriggered(true)
      }
    }

    // Detect external link clicks — but NOT affiliate links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && !exitIntentTriggered) {
        const href = link.getAttribute('href')
        const isExternal = href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('?') && !href.startsWith('mailto:')

        // Skip affiliate links — let them navigate immediately
        const isAffiliate = href && (
          href.includes('utm_source=whichhealthshare') ||
          href.includes('joincrowdhealth.com') ||
          href.includes('presidiocare.com') ||
          link.getAttribute('target') === '_blank'
        )

        if (isExternal && !isAffiliate && timeOnPage >= 15) {
          e.preventDefault()
          setPendingLink(href)
          setShowTippingModal(true)
          setExitIntentTriggered(true)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [exitIntentTriggered, timeOnPage])

  const handleCloseTipping = () => {
    setShowTippingModal(false)

    if (pendingLink) {
      window.open(pendingLink, '_blank')
      setPendingLink(null)
    }
  }

  return (
    <TippingPopup
      isOpen={showTippingModal}
      onClose={handleCloseTipping}
      context="exit-intent"
    />
  )
}
