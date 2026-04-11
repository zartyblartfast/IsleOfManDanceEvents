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

const projectId = readEnv('NEXT_PUBLIC_SANITY_PROJECT_ID')
const dataset = readEnv('NEXT_PUBLIC_SANITY_DATASET') ?? 'production'

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID (required for sanity typegen during npm run build)',
  )
}

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
