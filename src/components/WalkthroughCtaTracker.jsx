"use client";

import { useEffect } from "react";
import { trackWalkthroughCta } from "../lib/ga4";

const LOCATION_RE = /^[a-z0-9_]{1,64}$/;

function scheduleTarget(href) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    if (url.hash === "#schedule") return "schedule";
    if (url.hash === "#quote") return "quote";
  } catch (e) {
    return null;
  }
  return null;
}

function locationFor(anchor, target) {
  const explicit = anchor.getAttribute("data-cta-location");
  if (explicit && LOCATION_RE.test(explicit)) return explicit;
  const className = typeof anchor.className === "string" ? anchor.className : "";
  const classToken = className.split(/\s+/).find((token) => (
    /^[a-z0-9-]{1,48}$/.test(token) && /(cta|header)/.test(token)
  ));
  if (classToken) return `${classToken.replace(/-/g, "_")}_${target}`;
  return target === "quote" ? "quote_link" : "schedule_link";
}

// Clicks on anchors whose href hash is #schedule or #quote.
// QuoteChoiceModal and the homepage contact button are not anchors; they call
// trackWalkthroughCta directly.
export default function WalkthroughCtaTracker() {
  useEffect(() => {
    function onClick(event) {
      const raw = event.target;
      const origin = raw instanceof Element ? raw : raw && raw.parentElement;
      if (!origin) return;
      const anchor = origin.closest("a[href]");
      if (!anchor) return;
      const target = scheduleTarget(anchor.getAttribute("href"));
      if (!target) return;
      trackWalkthroughCta(locationFor(anchor, target));
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
