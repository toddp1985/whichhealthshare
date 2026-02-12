'use client'

import { useState, useEffect } from 'react'
import { TippingPopup } from './TippingModal'

export default function ExitIntentPopup() {
  const [showTippingModal, setShowTippingModal] = useState(false)
  const [exitIntent, setExitIntent] = useState(false)

  useEffect(() => {
    // Detect mouse leaving from top (back button region)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntent) {
        setShowTippingModal(true)
        setExitIntent(true)
      }
    }

    // Detect external link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link) {
        const href = link.getAttribute('href')
        const isExternal = href && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('?') && !href.startsWith('mailto:')
        
        if (isExternal && !exitIntent) {
          e.preventDefault()
          setShowTippingModal(true)
          setExitIntent(true)
          
          // Allow them to proceed after 5 seconds or if they close modal
          const timer = setTimeout(() => {
            if (link.target === '_blank') {
              window.open(href, '_blank')
            } else {
              window.location.href = href
            }
          }, 5000)
          
          return () => clearTimeout(timer)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [exitIntent])

  const handleCloseTipping = () => {
    setShowTippingModal(false)
  }

  return (
    <TippingPopup 
      isOpen={showTippingModal} 
      onClose={handleCloseTipping} 
      context="exit-intent"
    />
  )
}
