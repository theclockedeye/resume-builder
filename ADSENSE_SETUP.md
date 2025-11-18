# Google AdSense Integration Guide

This guide will help you integrate Google AdSense into your Resume Builder website to monetize your traffic.

## Prerequisites

1. A Google account
2. A deployed website (AdSense requires a live, publicly accessible website)
3. Original content and compliance with AdSense policies

## Step 1: Apply for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Click "Get Started" and sign in with your Google account
3. Enter your website URL (must be live and accessible)
4. Fill out the application form with your details
5. Accept the AdSense Terms and Conditions

## Step 2: Add AdSense Code to Your Website

Once your application is submitted, you'll receive an AdSense code snippet.

### Add the AdSense Script to index.html

1. Open `index.html`
2. Find this commented line:
   ```html
   <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
   ```
3. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual AdSense publisher ID
4. Uncomment the line by removing `<!--` and `-->`

Example:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
```

## Step 3: Wait for Approval

- Google will review your website (typically takes 1-2 weeks)
- Ensure your site has:
  - Original, high-quality content
  - Easy navigation
  - Privacy policy page
  - About page
  - Contact information
- Keep the AdSense code on your site during review

## Step 4: Create Ad Units (After Approval)

Once approved, create ad units in your AdSense dashboard:

### Recommended Ad Placements for Resume Builder:

#### 1. **Header Banner Ad** (Top of page)
- Format: Display ad
- Size: Responsive or 728x90 (Leaderboard)
- Placement: Above the main content

#### 2. **Sidebar Ad** (In the editor panel)
- Format: Display ad
- Size: Responsive or 300x250 (Medium Rectangle)
- Placement: Between editor sections

#### 3. **Footer Ad** (Bottom of page)
- Format: Display ad
- Size: Responsive or 728x90 (Leaderboard)
- Placement: In the footer area

### How to Add Ad Units:

1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Click "+ New ad unit"
3. Choose "Display ads"
4. Configure your ad:
   - Name: e.g., "Resume Builder - Header"
   - Ad size: Responsive (recommended)
   - Ad type: Text & display ads
5. Click "Create"
6. Copy the ad code

## Step 5: Implement Ad Units in Your App

### Option A: Add to App.jsx (Recommended)

Create a new component for ads:

```jsx
// src/components/AdUnit.jsx
import React, { useEffect } from 'react'

export default function AdUnit({ slot, format = 'auto', responsive = true }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense error:', e)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  )
}
```

Then use it in your App:

```jsx
import AdUnit from './components/AdUnit'

// In your App.jsx, add ads between sections:
<AdUnit slot="1234567890" /> {/* Replace with your ad slot ID */}
```

### Option B: Add Directly to index.html

Add ad units in the HTML (see commented examples in index.html):

```html
<div style="text-align: center; margin: 20px 0;">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="YYYYYYYYYY"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

## Step 6: Best Practices

### Do's:
✅ Place ads in visible locations without being intrusive
✅ Use responsive ad units for better mobile experience
✅ Limit to 3-4 ad units per page
✅ Ensure ads don't interfere with user experience
✅ Monitor performance in AdSense dashboard
✅ Comply with AdSense policies

### Don'ts:
❌ Don't click your own ads
❌ Don't ask users to click ads
❌ Don't place ads on pages with prohibited content
❌ Don't modify the AdSense code
❌ Don't place too many ads (affects user experience)

## Step 7: Optimize Ad Performance

1. **Test Ad Placements**: Try different positions to see what works best
2. **Use Auto Ads**: Let Google automatically place ads (optional)
3. **Monitor Analytics**: Check which pages generate most revenue
4. **A/B Testing**: Test different ad formats and sizes
5. **Mobile Optimization**: Ensure ads work well on mobile devices

## Recommended Ad Placements for This Resume Builder:

```
┌─────────────────────────────────────┐
│         Header Banner Ad            │ ← 728x90 or Responsive
├─────────────────────────────────────┤
│  Editor Panel    │   Preview Panel  │
│                  │                   │
│  [Ad Unit]       │   Resume Preview  │ ← 300x250 in sidebar
│                  │                   │
│  Form Fields     │                   │
│                  │                   │
├─────────────────────────────────────┤
│         Footer Banner Ad            │ ← 728x90 or Responsive
└─────────────────────────────────────┘
```

## Troubleshooting

### Ads Not Showing?
- Wait 24-48 hours after adding code
- Check browser console for errors
- Verify AdSense code is correct
- Ensure site is approved
- Check if ad blockers are enabled

### Low Revenue?
- Increase traffic to your site
- Improve ad placement
- Use responsive ad units
- Create quality content
- Optimize for SEO

## Additional Resources

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Best Practices](https://support.google.com/adsense/answer/17957)

## Privacy Policy Requirement

AdSense requires a privacy policy. Add this to your website:

Create a `privacy.html` or add to your footer:

```
Privacy Policy

This website uses Google AdSense, a service for including advertisements. 
Google AdSense uses "cookies", which are text files placed on your computer, 
to help the website analyze how users use the site. You can find more 
information about Google's privacy policy at: 
https://policies.google.com/privacy
```

## Support

If you need help:
1. Check [AdSense Help Center](https://support.google.com/adsense)
2. Visit [AdSense Community](https://support.google.com/adsense/community)
3. Contact AdSense Support through your dashboard

---

**Important**: Always comply with Google AdSense policies to avoid account suspension.
