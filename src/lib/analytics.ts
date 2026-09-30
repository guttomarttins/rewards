/**
 * Analytics utility for tracking events
 * Supports GA4, Microsoft Clarity, and custom events
 */

import type { AnalyticsEvent } from '@/lib/types';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Checks if analytics is enabled (consent given)
 */
export function isAnalyticsEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  // Check for consent cookie or localStorage
  return document.cookie.includes('analytics_consent=true') ||
         localStorage.getItem('analytics_consent') === 'true';
}

/**
 * Initialize analytics (call on app load)
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  // GA4 is loaded via next/script in layout.tsx
  // Clarity is loaded via next/script in layout.tsx

  // Track page view on initial load
  if (isAnalyticsEnabled()) {
    trackPageView();
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath?: string): void {
  if (!isAnalyticsEnabled()) return;

  const path = pagePath || window.location.pathname;

  // GA4
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Clarity
  if (window.clarity) {
    window.clarity('set', 'page', path);
  }
}

/**
 * Track custom event
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (!isAnalyticsEnabled()) return;

  const { event_name, parameters = {} } = event;

  // GA4
  if (window.gtag) {
    window.gtag('event', event_name, parameters);
  }

  // Clarity custom event
  if (window.clarity) {
    window.clarity('event', event_name, parameters);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event_name, parameters);
  }
}

/**
 * Track referral link click (MAIN CONVERSION EVENT)
 */
export function trackReferralClick(source: string = 'landing_page'): void {
  trackEvent({
    event_name: 'referral_link_click',
    parameters: {
      event_category: 'conversion',
      event_label: 'welcome_bonus_1320',
      source,
      value: 1320,
      currency: 'BRL',
    },
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent({
    event_name: 'cta_click',
    parameters: {
      cta_name: ctaName,
      location,
      event_category: 'engagement',
    },
  });
}

/**
 * Track hero CTA click
 */
export function trackHeroCTAClick(variant: 'primary' | 'secondary'): void {
  trackCTAClick(`hero_cta_${variant}`, 'hero');
}

/**
 * Track final CTA click
 */
export function trackFinalCTAClick(): void {
  trackCTAClick('final_cta', 'footer_cta');
}

/**
 * Track reward card interaction
 */
export function trackRewardCardInteraction(rewardId: string, action: 'hover' | 'click'): void {
  trackEvent({
    event_name: 'reward_card_interaction',
    parameters: {
      reward_id: rewardId,
      action,
      event_category: 'engagement',
    },
  });
}

/**
 * Track calculator interaction
 */
export function trackCalculatorInteraction(action: 'toggle' | 'calculate' | 'preset_change', data?: Record<string, unknown>): void {
  trackEvent({
    event_name: 'calculator_interaction',
    parameters: {
      action,
      ...data,
      event_category: 'engagement',
    },
  });
}

/**
 * Track FAQ interaction
 */
export function trackFAQInteraction(faqId: string, action: 'open' | 'close'): void {
  trackEvent({
    event_name: 'faq_interaction',
    parameters: {
      faq_id: faqId,
      action,
      event_category: 'engagement',
    },
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
  trackEvent({
    event_name: 'scroll_depth',
    parameters: {
      depth,
      event_category: 'engagement',
    },
  });
}

/**
 * Track time on page milestones
 */
export function trackTimeOnPage(seconds: number): void {
  trackEvent({
    event_name: 'time_on_page',
    parameters: {
      seconds,
      event_category: 'engagement',
    },
  });
}

/**
 * Track form interactions (if any forms added later)
 */
export function trackFormInteraction(formName: string, action: 'start' | 'complete' | 'abandon'): void {
  trackEvent({
    event_name: 'form_interaction',
    parameters: {
      form_name: formName,
      action,
      event_category: 'conversion',
    },
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLinkClick(url: string, linkText: string): void {
  trackEvent({
    event_name: 'external_link_click',
    parameters: {
      url,
      link_text: linkText,
      event_category: 'navigation',
    },
  });
}

/**
 * Track A/B test variant exposure
 */
export function trackABTestExposure(testName: string, variant: string): void {
  trackEvent({
    event_name: 'ab_test_exposure',
    parameters: {
      test_name: testName,
      variant,
      event_category: 'experiment',
    },
  });
}

/**
 * Set user properties (for logged in users)
 */
export function setUserProperties(properties: Record<string, string | number | boolean>): void {
  if (!isAnalyticsEnabled()) return;

  if (window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
}

/**
 * Track exception/error
 */
export function trackException(error: Error, context?: string): void {
  if (!isAnalyticsEnabled()) return;

  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      context,
    });
  }

  if (window.clarity) {
    window.clarity('event', 'error', {
      message: error.message,
      stack: error.stack,
      context,
    });
  }
}

/**
 * Consent management
 */
export function giveAnalyticsConsent(): void {
  localStorage.setItem('analytics_consent', 'true');
  document.cookie = 'analytics_consent=true; max-age=31536000; path=/; SameSite=Lax';
  initAnalytics();
}

export function revokeAnalyticsConsent(): void {
  localStorage.removeItem('analytics_consent');
  document.cookie = 'analytics_consent=; max-age=0; path=/; SameSite=Lax';
}

/**
 * Check if user has given consent
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return document.cookie.includes('analytics_consent=true') ||
         localStorage.getItem('analytics_consent') === 'true';
}

/**
 * Referral link with UTM tracking
 */
export const REFERRAL_LINK = 'https://rewards.bing.com/welcome?rh=bYHgIzH2RTY&ref=rafsrchae';

export function getReferralLink(): string {
  const url = new URL(REFERRAL_LINK);
  url.searchParams.set('utm_source', 'landing_page');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'welcome_bonus_1320');
  return url.toString();
}

/**
 * Opens referral link in new tab with tracking
 */
export function openReferralLink(event?: React.MouseEvent<HTMLAnchorElement>): void {
  if (event) {
    event.preventDefault();
  }
  const link = getReferralLink();
  window.open(link, '_blank', 'noopener,noreferrer');

  // Track event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'referral_link_click', {
      event_category: 'conversion',
      event_label: 'welcome_bonus',
      value: 1320,
    });
  }
}