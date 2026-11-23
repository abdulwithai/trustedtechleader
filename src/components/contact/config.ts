/* Build-time integration IDs. All optional; components render a fallback when unset. */
export const CAL_LINK = (process.env.NEXT_PUBLIC_CAL_LINK || '').replace(/^https?:\/\/(www\.)?cal\.com\//, '').replace(/^\/+|\/+$/g, '');
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
export const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID || process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || '';
