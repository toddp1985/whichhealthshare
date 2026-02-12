'use client'

import { useState, useEffect } from 'react'
import { TippingPopup } from './TippingModal'

export default function ExitIntentPopup() {
  const [showTippingModal, setShowTippingModal] = useState(false)
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false)
  const [pendingLink, setPendingLink] = useState<string | null>(null)

  useEffect(() => {
    // Detect mouse leaving from top (back button region)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered) {
        setShowTippingModal(true)
        setExitIntentTriggered(true)
      }
    }

    // Detect external link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && !exitIntentTriggered) {
        const href = link.getAttribute('href')
        const isExternal = href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('?') && !href.startsWith('mailto:')
        
        if (isExternal) {
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
  }, [exitIntentTriggered])

  const handleCloseTipping = () => {
    setShowTippingModal(false)
    
    // If a link was pending, navigate after modal closes
    if (pendingLink) {
      setTimeout(() => {
        window.open(pendingLink, '_blank')
      }, 300)
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
