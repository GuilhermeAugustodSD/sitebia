// lib/gtag.ts
export const GA_TRACKING_ID = 'G-4LV1XJLYYS'; // <-- seu ID do GA4

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}


// Envia pageview manualmente
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Envia eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
