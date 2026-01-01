/**
 * Meta Parameter Builder Type Definitions
 * Provides TypeScript support for Meta's client-side Parameter Builder
 */

declare global {
  interface Window {
    /**
     * Meta's Client-Side Parameter Builder
     * Collects and manages Meta conversion tracking parameters
     * Reference: https://github.com/facebook/capi-param-builder
     */
    CapiParamBuilder?: {
      /**
       * Process current page URL and collect all Meta parameters
       * Extracts fbclid from URL, manages cookies (_fbp, _fbc, _fbi)
       *
       * @param url - Current page URL
       * @param getIpFn - Async function that returns client IP (for IPv6 collection)
       * @returns Promise that resolves when processing is complete
       */
      processAndCollectAllParams(
        url: string,
        getIpFn: () => Promise<string>
      ): Promise<void>

      /**
       * Get collected Meta parameters
       * Should be called after processAndCollectAllParams completes
       *
       * @returns Object containing fbp, fbc, and fbi parameters
       */
      getCollectedParams(): {
        /** Facebook Pixel ID - identifies the browser */
        fbp?: string
        /** Facebook Click ID - tracks ad clicks */
        fbc?: string
        /** Facebook IPv6 Identifier - captures IPv6 address for better tracking */
        fbi?: string
      }

      /**
       * Alternative method to get a specific parameter
       * @param paramName - Name of parameter to retrieve
       * @returns Parameter value or undefined
       */
      getParam?(paramName: 'fbp' | 'fbc' | 'fbi'): string | undefined
    }
  }
}

export {}
