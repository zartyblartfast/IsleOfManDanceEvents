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
      <div className="prose prose-gray max-w-none mb-10">
        <p className="text-gray-600 font-light leading-relaxed">
          Detailed travel advice, ferry options, and local tips will appear here. For now, see the
          overview on the{' '}
          <Link href="/" className="text-brand underline hover:text-gray-900 underline-offset-4">
            home page
          </Link>
          .
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex font-mono text-sm text-gray-700 hover:underline underline-offset-4"
      >
        ← Back to home
      </Link>
    </PageLayout>
  )
}
