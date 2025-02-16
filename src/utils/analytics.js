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
  gtag('config', GA_MEASUREMENT_ID, {
    // Configure session timeout (default is 30 minutes)
    session_timeout: 30,
    // Enable enhanced measurement for automatic event tracking
    enhanced_measurement: {
      page_view: true,
      scroll: true,
      outbound_click: true,
      file_download: true
    }
  })

  window.gtag = gtag
}

// Track page views with timing data
export const trackPageView = (path) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      time_on_page: Math.round(performance.now() / 1000)
    })
  }
}

// Track button and link clicks
export const trackClick = (elementName, elementType, destination = null) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click', {
      element_name: elementName,
      element_type: elementType,
      destination: destination,
      page_location: window.location.href
    })
  }
}

// Track time spent on page
export const trackTimeOnPage = (timeInSeconds) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'time_on_page', {
      duration: timeInSeconds,
      page_location: window.location.href,
      page_title: document.title
    })
  }
}

// Track user engagement score
export const trackEngagement = (scrollDepth, timeOnPage) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'user_engagement', {
      scroll_depth: scrollDepth,
      time_on_page: timeOnPage,
      page_location: window.location.href
    })
  }
}

// Enhanced Analytics Provider Component
import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation()
  const pageLoadTime = useRef(Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)

  // Initialize GA on mount
  useEffect(() => {
    initializeGA()
  }, [])

  // Track page views and reset timer on route change
  useEffect(() => {
    pageLoadTime.current = Date.now()
    trackPageView(location.pathname)

    // Cleanup function to track time spent when leaving page
    return () => {
      const timeSpent = (Date.now() - pageLoadTime.current) / 1000
      trackTimeOnPage(timeSpent)
    }
  }, [location])

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const newScrollDepth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)
      
      if (newScrollDepth > scrollDepth) {
        setScrollDepth(newScrollDepth)
        if (newScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEngagement(newScrollDepth, (Date.now() - pageLoadTime.current) / 1000)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDepth])

  return children
}

// Hook for tracking clicks
export const useTrackedClick = (elementName, elementType) => {
  return (destination = null) => {
    trackClick(elementName, elementType, destination)
  }
}