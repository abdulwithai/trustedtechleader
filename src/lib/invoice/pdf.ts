import type { jsPDF } from 'jspdf';
import { formatMoney, invoiceTotal, lineAmount } from './money';
import { PROVIDER, type Invoice } from './types';

type RGB = [number, number, number];

const NAVY: RGB = [0x1f, 0x3a, 0x5f];
const MUTED: RGB = [0x5b, 0x65, 0x73];
const DARK: RGB = [0x22, 0x2a, 0x35];
const RULE: RGB = [0xd5, 0xda, 0xe1];
const ZEBRA: RGB = [0xf3, 0xf5, 0xf8];
const WHITE: RGB = [255, 255, 255];

const MARGIN = 18;
const PT = 0.3528; // mm per point
const FOOTER_LINE_FROM_BOTTOM = 14;
const FOOTER_TEXT_FROM_BOTTOM = 9;
const BOTTOM_RESERVE = 22; // content must stay above this distance from the page bottom

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const month = MONTHS[parseInt(m[2], 10) - 1];
  if (!month) return iso;
  return `${parseInt(m[3], 10)} ${month} ${m[1]}`;
}

/** Line height in mm for a font size in pt. */
function lh(size: number, factor = 1.3): number {
  return size * PT * factor;
}

function splitLines(doc: jsPDF, text: string, width: number): string[] {
  const out: string[] = [];
  for (const para of text.replace(/\r\n?/g, '\n').split('\n')) {
    if (para.trim() === '') {
      out.push('');
      continue;
    }
    out.push(...(doc.splitTextToSize(para, width) as string[]));
  }
  return out;
}

export function drawInvoice(doc: jsPDF, inv: Invoice): void {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const cw = pageW - MARGIN * 2;
  const right = pageW - MARGIN;
  const limit = pageH - BOTTOM_RESERVE;

  const font = (style: 'normal' | 'bold', size: number, color: RGB) => {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
  };
  const stroke = (color: RGB, width: number) => {
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(width);
  };

  // ---- Header, left ----
  let yl = MARGIN + 6;
  font('bold', 18, NAVY);
  doc.text(PROVIDER.name, MARGIN, yl);
  yl += lh(9.5, 1.5) + 0.5;
  font('normal', 9.5, MUTED);
  doc.text(PROVIDER.tagline, MARGIN, yl);
  yl += lh(9.5, 1.5) + 3;
  font('normal', 9.5, DARK);
  doc.textWithLink(PROVIDER.website, MARGIN, yl, { url: PROVIDER.websiteUrl });
  yl += lh(9.5, 1.5);
  doc.text(PROVIDER.phone, MARGIN, yl);

  // ---- Header, right ----
  let yr = MARGIN + 7;
  font('bold', 22, NAVY);
  doc.text('INVOICE', right, yr, { align: 'right' });
  yr += lh(9.5, 1.5) + 2.5;

  font('bold', 9.5, DARK);
  const numW = doc.getTextWidth(inv.number);
  doc.text(inv.number, right, yr, { align: 'right' });
  font('normal', 9.5, DARK);
  doc.text('Invoice No: ', right - numW, yr, { align: 'right' });
  yr += lh(9.5, 1.5);
  doc.text(`Date: ${formatDate(inv.date)}`, right, yr, { align: 'right' });
  yr += lh(9.5, 1.5);
  if (inv.paymentTerms.trim()) {
    font('normal', 9.5, MUTED);
    doc.text(`Payment: ${inv.paymentTerms.trim()}`, right, yr, { align: 'right' });
    yr += lh(9.5, 1.5);
  }

  // ---- Rule ----
  let y = Math.max(yl, yr) + 4;
  stroke(RULE, 0.3);
  doc.line(MARGIN, y, right, y);
  y += 7;

  // ---- Bill to / Project ----
  const colRightX = MARGIN + cw * 0.58;
  const leftW = colRightX - MARGIN - 6;
  const rightW = right - colRightX;
  let yb = y;
  font('bold', 8, MUTED);
  doc.text('BILL TO', MARGIN, yb);
  yb += lh(9.5, 1.5);
  font('bold', 10.5, DARK);
  for (const l of splitLines(doc, inv.client.name, leftW)) {
    doc.text(l, MARGIN, yb);
    yb += lh(10.5, 1.4);
  }
  font('normal', 9.5, DARK);
  if (inv.client.address.trim()) {
    for (const l of splitLines(doc, inv.client.address, leftW)) {
      doc.text(l, MARGIN, yb);
      yb += lh(9.5, 1.4);
    }
  }

  let yp = y;
  if (inv.projectTitle.trim() || inv.projectSubtitle.trim()) {
    font('bold', 8, MUTED);
    doc.text('PROJECT', colRightX, yp);
    yp += lh(9.5, 1.5);
    if (inv.projectTitle.trim()) {
      font('bold', 10.5, DARK);
      for (const l of splitLines(doc, inv.projectTitle.trim(), rightW)) {
        doc.text(l, colRightX, yp);
        yp += lh(10.5, 1.4);
      }
    }
    if (inv.projectSubtitle.trim()) {
      font('normal', 9.5, DARK);
      for (const l of splitLines(doc, inv.projectSubtitle.trim(), rightW)) {
        doc.text(l, colRightX, yp);
        yp += lh(9.5, 1.4);
      }
    }
  }
  y = Math.max(yb, yp) + 6;

  // ---- Items table ----
  const w = [0.06, 0.52, 0.08, 0.17, 0.17].map((p) => p * cw);
  const x0 = MARGIN;
  const x1 = x0 + w[0];
  const x2 = x1 + w[1];
  const x3 = x2 + w[2];
  const x4 = x3 + w[3];
  const pad = 2.5;
  const HEAD_H = 8;

  const drawHeader = () => {
    doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.rect(MARGIN, y, cw, HEAD_H, 'F');
    font('bold', 9, WHITE);
    const ty = y + HEAD_H / 2 + 1.2;
    doc.text('#', x0 + pad, ty);
    doc.text('Description', x1 + pad, ty);
    doc.text('Qty', x3 - pad, ty, { align: 'right' });
    doc.text('Rate', x4 - pad, ty, { align: 'right' });
    doc.text('Amount', right - pad, ty, { align: 'right' });
    y += HEAD_H;
  };
  drawHeader();

  inv.items.forEach((item, i) => {
    const descW = w[1] - pad * 2;
    font('bold', 9.5, DARK);
    const nameLines = splitLines(doc, item.name, descW);
    font('normal', 8.5, MUTED);
    const descLines = item.description.trim() ? splitLines(doc, item.description, descW) : [];
    const nameH = lh(9.5, 1.35);
    const descH = lh(8.5, 1.35);
    const rowH = pad + nameLines.length * nameH + descLines.length * descH + pad;

    if (y + rowH > limit) {
      doc.addPage();
      y = MARGIN;
      drawHeader();
    }

    const bg = i % 2 === 1 ? ZEBRA : WHITE;
    doc.setFillColor(bg[0], bg[1], bg[2]);
    doc.rect(MARGIN, y, cw, rowH, 'F');

    const base = y + pad + 9.5 * PT * 0.9;
    font('normal', 9.5, DARK);
    doc.text(String(i + 1), x0 + pad, base);
    doc.text(String(item.qty), x3 - pad, base, { align: 'right' });
    doc.text(formatMoney(item.rate, inv.currency), x4 - pad, base, { align: 'right' });
    doc.text(formatMoney(lineAmount(item), inv.currency), right - pad, base, { align: 'right' });

    let ty = base;
    font('bold', 9.5, DARK);
    for (const l of nameLines) {
      doc.text(l, x1 + pad, ty);
      ty += nameH;
    }
    font('normal', 8.5, MUTED);
    for (const l of descLines) {
      doc.text(l, x1 + pad, ty);
      ty += descH;
    }

    y += rowH;
    stroke(RULE, 0.2);
    doc.line(MARGIN, y, right, y);
  });

  // ---- Totals ----
  const ensure = (h: number) => {
    if (y + h > limit) {
      doc.addPage();
      y = MARGIN;
    }
  };
  const total = invoiceTotal(inv);
  const totalsX = MARGIN + cw * 0.5;
  ensure(26);
  y += 7;
  font('normal', 9.5, MUTED);
  doc.text('Subtotal', totalsX, y);
  font('normal', 9.5, DARK);
  doc.text(formatMoney(total, inv.currency), right, y, { align: 'right' });
  y += 3;
  stroke(NAVY, 1 * PT);
  doc.line(totalsX, y, right, y);
  y += 6;
  font('bold', 11, NAVY);
  doc.text('Total Due', totalsX, y);
  doc.text(formatMoney(total, inv.currency), right, y, { align: 'right' });
  y += 10;

  // ---- Notes ----
  if (inv.notes.trim()) {
    const noteLines = splitLines(doc, inv.notes.trim(), cw);
    ensure(lh(9.5, 1.5) + lh(9.5, 1.4) * Math.min(noteLines.length, 3));
    font('bold', 8, MUTED);
    doc.text('NOTES', MARGIN, y);
    y += lh(9.5, 1.5);
    font('normal', 9.5, DARK);
    for (const l of noteLines) {
      ensure(lh(9.5, 1.4));
      doc.text(l, MARGIN, y);
      y += lh(9.5, 1.4);
    }
    y += 6;
  }

  ensure(8);
  font('bold', 10, NAVY);
  doc.text('Thank you for your business.', MARGIN, y);

  // ---- Footer on every page ----
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    stroke(RULE, 0.3);
    doc.line(MARGIN, pageH - FOOTER_LINE_FROM_BOTTOM, right, pageH - FOOTER_LINE_FROM_BOTTOM);
    font('normal', 8, MUTED);
    doc.text(
      `${PROVIDER.name}  |  ${PROVIDER.website}  |  ${PROVIDER.phone}`,
      pageW / 2,
      pageH - FOOTER_TEXT_FROM_BOTTOM,
      { align: 'center' },
    );
  }
}

export async function buildInvoicePdf(inv: Invoice): Promise<Blob> {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  doc.setProperties({ title: `Invoice ${inv.number}`, author: PROVIDER.name });
  drawInvoice(doc, inv);
  return doc.output('blob');
}

export async function downloadInvoicePdf(inv: Invoice): Promise<void> {
  const blob = await buildInvoicePdf(inv);
  const safe = inv.client.name.replace(/[^A-Za-z0-9]/g, '_');
  const filename = `Invoice_${inv.number}_${safe}.pdf`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
