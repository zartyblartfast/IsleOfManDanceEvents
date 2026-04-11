import type {Metadata} from 'next'
import Link from 'next/link'

import {CtaLink} from '@/app/components/CtaLink'

export const metadata: Metadata = {
  title: 'Port Erin Modern Jive & Tango Weekend',
  description:
    'Planned weekend in Port Erin combining Modern Jive and Tango — details to be confirmed.',
}

export default function PortErinWeekendPage() {
  return (
    <div className="container max-w-3xl px-4 py-16 sm:py-24">
      <p className="font-mono text-sm text-gray-500 mb-4">Featured event</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
        Port Erin Modern Jive &amp; Tango Weekend
      </h1>
      <div className="prose prose-lg prose-gray max-w-none mb-10">
        <p className="text-gray-600 font-light leading-relaxed">
          A planned weekend event combining separate Modern Jive and Tango sessions, social dancing,
          travel advice and accommodation information in one of the Isle of Man&apos;s most scenic
          locations. Dates, booking and full programme will be announced here.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <CtaLink href="/travel">Travel Information</CtaLink>
        <CtaLink href="/contact" variant="secondary">
          Contact Us
        </CtaLink>
      </div>
      <p className="mt-12">
        <Link
          href="/"
          className="inline-flex font-mono text-sm text-gray-700 hover:underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </p>
    </div>
  )
}
