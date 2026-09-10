/**
 * Formats a number into Indonesian Rupiah, e.g. 45000 -> "Rp45rb", 150000 -> "Rp150rb".
 * Falls back to a plain "Rp" + thousands-separated value for amounts under 1,000.
 */
export function formatIDR(amount: number): string {
  if (amount >= 1000) {
    const thousands = amount / 1000;
    const rounded = Number.isInteger(thousands) ? thousands : Math.round(thousands * 10) / 10;
    return `Rp${rounded}rb`;
  }
  return `Rp${amount.toLocaleString("id-ID")}`;
}

/** Full, non-abbreviated Rupiah format, e.g. 45000 -> "Rp45.000". Use for totals/receipts. */
export function formatIDRFull(amount: number): string {
  return `Rp${amount.toLocaleString("id-ID")}`;
}
