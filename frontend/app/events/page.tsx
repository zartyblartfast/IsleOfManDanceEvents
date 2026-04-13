import {Suspense} from 'react'
import type {Metadata} from 'next'

import {AllPosts} from '@/app/components/Posts'
import {AllEvents} from '@/app/components/Events'
import {PageLayout} from '@/app/components/PageLayout'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Dance events, news and updates for the Isle of Man dance community.',
}

export default function EventsPage() {
  return (
    <PageLayout
      eyebrow="What's on"
      title="Events & updates"
      description="News and announcements from IoM Dance. Full event listings will grow as we add content in the CMS."
      prose={false}
    >
      <div className="space-y-16">
        <Suspense
          fallback={
            <p className="text-sm text-ink-muted font-light" aria-live="polite">
              Loading events…
            </p>
          }
        >
          <AllEvents />
        </Suspense>
        <Suspense
          fallback={
            <p className="text-sm text-ink-muted font-light" aria-live="polite">
              Loading posts…
            </p>
          }
        >
          <AllPosts heading="Latest posts" />
        </Suspense>
      </div>
    </PageLayout>
  )
}
