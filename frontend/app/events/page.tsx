import {Suspense} from 'react'
import type {Metadata} from 'next'

import {AllPosts} from '@/app/components/Posts'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Dance events, news and updates for the Isle of Man dance community.',
}

export default function EventsPage() {
  return (
    <div className="container px-4 py-16 sm:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Events &amp; updates
        </h1>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          News and announcements from IoM Dance. Full event listings will grow as we add content in
          the CMS.
        </p>
      </div>
      <Suspense
        fallback={
          <p className="font-mono text-sm text-gray-500" aria-live="polite">
            Loading…
          </p>
        }
      >
        <AllPosts heading="Latest" />
      </Suspense>
    </div>
  )
}
