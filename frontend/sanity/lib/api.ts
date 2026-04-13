/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

/** Prefer setting `NEXT_PUBLIC_SANITY_DATASET` in Vercel; defaults match this project's dataset. */
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production').replace(/^["']|["']$/g, '').trim()

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.replace(/^["']|["']$/g, '').trim(),
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

/**
 * see https://www.sanity.io/docs/api-versioning for how versioning works
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-25'

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'
