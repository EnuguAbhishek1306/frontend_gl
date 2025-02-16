export const GA_MEASUREMENT_ID = 'G-MBDSKX4HR3' // Replace with your GA4 Measurement ID

// Initialize Google Analytics
export const initializeGA = () => {
  // Add Google Analytics script to head
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)

  // Make gtag available globally
  window.gtag = gtag
}

// Track page views
export const trackPageView = (path) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title
    })
  }
}

// Analytics component to wrap the app
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Initialize GA when component mounts
    initializeGA()
  }, [])

  useEffect(() => {
    // Track page view whenever location changes
    trackPageView(location.pathname)
  }, [location])

  return children
}