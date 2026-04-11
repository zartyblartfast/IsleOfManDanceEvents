import type {Metadata} from 'next'
import Link from 'next/link'

import {PageLayout} from '@/app/components/PageLayout'

export const metadata: Metadata = {
  title: 'Travel',
  description:
    'Travel advice, ferries and visiting the Isle of Man for dance weekends — content coming soon.',
}

export default function TravelPage() {
  return (
    <PageLayout
      title="Travel"
      description="Ferries, flights, local transport and practical tips for visiting the Isle of Man for dance weekends."
    >
      <p>
        Detailed travel advice, ferry options, and local tips will appear here. For now, see the
        overview on the{' '}
        <Link href="/" className="text-brand font-medium hover:text-brand-deep">
          home page
        </Link>
        .
      </p>
      <div className="not-prose mt-10">
        <Link
          href="/"
          className="inline-flex font-mono text-sm text-ink-muted hover:text-brand transition-colors underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </PageLayout>
  )
}
