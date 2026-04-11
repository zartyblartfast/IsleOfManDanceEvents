import type {Metadata} from 'next'

import {PageLayout} from '@/app/components/PageLayout'

export const metadata: Metadata = {
  title: 'About',
  description: 'About IoM Dance — social dance weekends and events in the Isle of Man.',
}

export default function AboutPage() {
  return (
    <PageLayout
      title="About IoM Dance"
      description="Placeholder copy will be replaced with your story, organisers, and how we run events."
    >
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 font-light leading-relaxed">
          This page will introduce the project, who is involved, and what dancers can expect from
          weekends and socials in the Isle of Man.
        </p>
      </div>
    </PageLayout>
  )
}
