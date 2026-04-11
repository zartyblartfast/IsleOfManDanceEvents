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
    <div className="border-t border-brand/5 bg-cream">
      <div className="container max-w-3xl px-4 py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Featured event</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-6">
          Port Erin Modern Jive &amp; Tango Weekend
        </h1>
        <div className="prose prose-lg max-w-none mb-10 prose-p:text-ink-muted prose-p:font-light">
          <p>
            A planned weekend event combining separate Modern Jive and Tango sessions, social dancing,
            travel advice and accommodation information in one of the Isle of Man&apos;s most scenic
            locations. Dates, booking and full programme will be announced here.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <CtaLink href="/travel">Travel information</CtaLink>
          <CtaLink href="/contact" variant="secondary">
            Contact us
          </CtaLink>
        </div>
        <p className="mt-12">
          <Link
            href="/"
            className="inline-flex text-sm text-ink-muted hover:text-brand transition-colors underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}
