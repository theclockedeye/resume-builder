import React, { useEffect } from 'react'

/**
 * Google AdSense Ad Unit Component
 * 
 * Usage:
 * <AdUnit slot="1234567890" format="auto" />
 * 
 * Props:
 * - slot: Your AdSense ad slot ID (required)
 * - format: Ad format (default: 'auto')
 * - responsive: Whether ad should be responsive (default: true)
 * - style: Custom styles for the ad container
 */
export default function AdUnit({ 
  slot, 
  format = 'auto', 
  responsive = true,
  style = {}
}) {
  useEffect(() => {
    try {
      // Push ad to AdSense
      if (window.adsbygoogle && slot) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error('AdSense error:', e)
    }
  }, [slot])

  // Don't render if no slot ID is provided
  if (!slot) {
    return null
  }

  return (
    <div className="ad-container" style={{ 
      textAlign: 'center', 
      margin: '20px 0',
      padding: '10px',
      ...style 
    }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}

/**
 * Example usage in App.jsx:
 * 
 * import AdUnit from './components/AdUnit'
 * 
 * // In your component:
 * <AdUnit slot="1234567890" />
 * 
 * // With custom styling:
 * <AdUnit 
 *   slot="1234567890" 
 *   format="rectangle"
 *   style={{ marginTop: '30px' }}
 * />
 */
