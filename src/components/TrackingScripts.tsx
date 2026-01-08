'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function TrackingScripts() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has given consent
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie-consent='))
      ?.split('=')[1]

    setHasConsent(cookieValue === 'true')
    setIsLoading(false)
  }, [])

  // If still loading, don't render anything
  if (isLoading) {
    return null
  }

  // Only render tracking scripts if user has consented
  if (!hasConsent) {
    return null
  }

  return (
    <>
      {/* Meta Pixel */}
      {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <>
          <Script
            id="meta-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Meta Parameter Builder - Client Side */}
      {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <Script
          id="meta-param-builder"
          src="https://capi-automation.s3.us-east-2.amazonaws.com/public/client_js/capiParamBuilder/clientParamBuilder.bundle.js"
          strategy="lazyOnload"
        />
      )}
    </>
  )
}
