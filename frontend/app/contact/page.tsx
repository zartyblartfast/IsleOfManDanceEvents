import type {Metadata} from 'next'
import Link from 'next/link'

import {PageLayout} from '@/app/components/PageLayout'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about Isle of Man dance weekends and social dance events.',
}

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      description="Reach the IoM Dance team about events, travel questions, or getting involved."
    >
      <div className="prose prose-gray max-w-none mb-10">
        <p className="text-gray-600 font-light leading-relaxed">
          We&apos;re setting up dedicated contact details for IoM Dance. In the meantime, please reach
          out through any channels we publish on the site or social media once they are listed.
        </p>
        <p className="text-gray-600 font-light leading-relaxed">
          Whether you are local or travelling from the UK or Ireland, we would love to hear from
          you.
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
