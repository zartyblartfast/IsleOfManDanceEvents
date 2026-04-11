import type {Metadata} from 'next'

import {PageLayout} from '@/app/components/PageLayout'

export const metadata: Metadata = {
  title: 'Accommodation',
  description: 'Where to stay when visiting the Isle of Man for dance events.',
}

export default function AccommodationPage() {
  return (
    <PageLayout
      title="Accommodation"
      description="Ideas and links for places to stay — town, coast, and options for weekend visitors."
    >
      <p>
        Content for hotels, B&amp;Bs, self-catering and travel-friendly bases will go here, linked
        from event pages and the travel section.
      </p>
    </PageLayout>
  )
}
