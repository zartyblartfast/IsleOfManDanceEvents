import {Suspense} from 'react'
import type {Metadata} from 'next'

import {AllPosts} from '@/app/components/Posts'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Dance events, news and updates for the Isle of Man dance community.',
}

export default function EventsPage() {
  return (
    <div className="border-t border-brand/5 bg-cream">
      <div className="container px-4 py-16 sm:py-20">
        <div className="max-w-3xl mb-12 lg:max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand mb-3">What&apos;s on</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4 font-[family-name:var(--font-fraunces)]">
            Events &amp; updates
          </h1>
          <p className="text-lg text-ink-muted font-light leading-relaxed">
            News and announcements from IoM Dance. Full event listings will grow as we add content in
            the CMS.
          </p>
        </div>
        <Suspense
          fallback={
            <p className="text-sm text-ink-muted font-light" aria-live="polite">
              Loading…
            </p>
          }
        >
          <AllPosts heading="Latest" />
        </Suspense>
      </div>
    </div>
  )
}
