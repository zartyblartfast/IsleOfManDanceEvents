/**
 * Sanity CLI Configuration for Frontend
 * This file configures typegen for the frontend workspace.
 * Learn more: https://www.sanity.io/docs/cli
 */

import {defineCliConfig} from 'sanity/cli'

function readEnv(name: string): string | undefined {
  const v = process.env[name]
  if (v == null || v === '') return undefined
  return v.replace(/^["']|["']$/g, '').trim() || undefined
}

/** Used when `frontend/.env.local` is missing so `sanity typegen` / `predev` still run locally. */
const PROJECT_FALLBACK = 'qjvhv9py'

const projectId = readEnv('NEXT_PUBLIC_SANITY_PROJECT_ID') ?? PROJECT_FALLBACK
const dataset = readEnv('NEXT_PUBLIC_SANITY_DATASET') ?? 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  typegen: {
    path: './sanity/**/*.{ts,tsx,js,jsx}',
    schema: '../sanity.schema.json',
    generates: './sanity.types.ts',
    overloadClientMethods: true,
  },
})
