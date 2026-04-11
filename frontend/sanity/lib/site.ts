/**
 * Canonical site URL for metadata (Open Graph, etc.).
 * Set NEXT_PUBLIC_SITE_URL in Vercel to your primary URL, e.g. https://iomdance.events
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '').trim()
  if (raw) {
    return raw.startsWith('http') ? raw : `https://${raw}`
  }
  return 'https://iomdance.events'
}
