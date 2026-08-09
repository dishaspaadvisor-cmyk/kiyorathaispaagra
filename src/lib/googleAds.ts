declare global {
  interface Window {
    gtag?: (
      command: "js" | "config" | "event",
      eventName: string,
      parameters?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

const CONVERSION_ID = "AW-18379813823/RLY0CPeHzN4cEL_nlrxE";
const CONVERSION_TIMEOUT_MS = 1500;
const FALLBACK_NAVIGATION_MS = 1700;

function safelyNavigate(url: string): void {
  window.location.href = url;
}

export function trackGoogleAdsConversion(): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: CONVERSION_ID,
    value: 1.0,
    currency: "INR",
  });
}

export function trackGoogleAdsConversionAndNavigate(url: string): void {
  if (typeof window === "undefined") return;

  let hasNavigated = false;

  const navigate = (): void => {
    if (hasNavigated) return;
    hasNavigated = true;
    safelyNavigate(url);
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: CONVERSION_ID,
    value: 1.0,
    currency: "INR",
    event_callback: navigate,
    event_timeout: CONVERSION_TIMEOUT_MS,
  });

  window.setTimeout(navigate, FALLBACK_NAVIGATION_MS);
}
