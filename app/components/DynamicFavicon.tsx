'use client'

import { useEffect } from 'react'

const DynamicFavicon = () => {
  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      if (favicon) {
        favicon.href = isDarkMode ? '/dark.ico' : '/light.ico'
      }
    }

    updateFavicon()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateFavicon()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return null
}

export default DynamicFavicon
