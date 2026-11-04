// GA4 helpers. Never send PII. Never let analytics throw into the UI.

export function trackWalkthroughCta(location) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "walkthrough_cta_click", {
        location,
        page_path: window.location.pathname,
      });
    }
  } catch (e) {
    /* analytics must never break navigation */
  }
}
