// Shared types for the browser-only invoice admin (/admin/).
// Everything is stored in the admin's own browser (localStorage); nothing is sent to a server.

export type Currency = 'PKR' | 'USD';

/** A reusable service in the admin's catalog, picked when building an invoice. */
export type Service = {
  id: string;
  name: string;
  description: string;
  rate: number;
  currency: Currency;
};

export type LineItem = {
  id: string;
  name: string;
  description: string;
  qty: number;
  rate: number;
};

export type Client = {
  name: string;
  address: string;
};

export type Invoice = {
  id: string;
  /** e.g. "TTL-2026-001" */
  number: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  currency: Currency;
  client: Client;
  /** Optional "PROJECT" block: title line and one sub line. */
  projectTitle: string;
  projectSubtitle: string;
  items: LineItem[];
  /** e.g. "Due on receipt" */
  paymentTerms: string;
  notes: string;
  /** ISO timestamp of the last save. */
  savedAt: string;
};

/** An invoice generated outside this tool; the original PDF/image is kept as a data URL. */
export type UploadedInvoice = {
  id: string;
  /** Free text, entered by the admin. */
  number: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  currency: Currency;
  amount: number;
  client: string;
  fileName: string;
  /** MIME type of the uploaded file. */
  fileType: string;
  /** The file as a data URL. */
  fileData: string;
  /** ISO timestamp of the upload. */
  savedAt: string;
};

/** Fixed provider details printed on every invoice. */
export const PROVIDER = {
  name: 'Trusted Tech Leader',
  tagline: 'Video Production & Editing Services',
  website: 'trustedtechleader.com',
  websiteUrl: 'http://trustedtechleader.com/',
  phone: '+92 310 6214427',
} as const;
