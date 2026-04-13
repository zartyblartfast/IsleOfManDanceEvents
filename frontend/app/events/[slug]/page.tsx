import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {type PortableTextBlock} from 'next-sanity'
import {format, parseISO} from 'date-fns'

import {sanityFetch} from '@/sanity/lib/live'
import {getEventQuery, eventsSlugs} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import {Section} from '@/app/components/Section'
import PortableText from '@/app/components/PortableText'
import PageBuilderPage from '@/app/components/PageBuilder'
import {GetEventQueryResult} from '@/sanity.types'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for event pages.
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: eventsSlugs,
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the event page.
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const {data: event} = await sanityFetch({
    query: getEventQuery,
    params,
    stega: false,
  })

  return {
    title: event?.title,
    description: event?.excerpt || undefined,
    openGraph: {
      images: resolveOpenGraphImage(event?.coverImage) ? [resolveOpenGraphImage(event?.coverImage)!] : [],
    },
  } satisfies Metadata
}

/** Format a date range string for display. */
function formatDateRange(dateStart?: string | null, dateEnd?: string | null) {
  if (!dateStart) return null
  const start = format(parseISO(dateStart), 'EEE d MMM yyyy')
  if (!dateEnd) return start
  const end = format(parseISO(dateEnd), 'EEE d MMM yyyy')
  return `${start} – ${end}`
}

/** Badge colour based on event status. */
function statusBadge(status?: string | null) {
  if (!status || status === 'confirmed') return null
  const colours: Record<string, string> = {
    planned: 'bg-amber-100 text-amber-800',
    'sold-out': 'bg-red-100 text-red-800',
    cancelled: 'bg-gray-200 text-gray-600 line-through',
  }
  return (
    <span className={`inline-block text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded ${colours[status] ?? ''}`}>
      {status.replace('-', ' ')}
    </span>
  )
}

export default async function EventPage(props: Props) {
  const params = await props.params
  const {data: event} = await sanityFetch({query: getEventQuery, params})

  if (!event?._id) {
    notFound()
  }

  const dateRange = formatDateRange(event.dateStart, event.dateEnd)

  return (
    <div className="border-t border-brand/5 bg-cream">
      {/* Header */}
      <Section as="header">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand mb-3">Event</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4 font-[family-name:var(--font-fraunces)]">
          {event.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted mt-4">
          {dateRange && <span>{dateRange}</span>}
          {event.venue && <span>📍 {event.venue}</span>}
          {statusBadge(event.status)}
        </div>

        {event.danceStyles && event.danceStyles.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {event.danceStyles.map((style) => (
              <span
                key={style}
                className="text-xs font-medium bg-brand/10 text-brand-deep rounded-full px-3 py-1"
              >
                {style}
              </span>
            ))}
          </div>
        )}

        {event.excerpt && (
          <p className="text-lg text-ink-muted font-light leading-relaxed mt-6">
            {event.excerpt}
          </p>
        )}

        {event.bookingUrl && (
          <div className="mt-6">
            <a
              href={event.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-deep text-white text-sm font-medium px-6 py-3 transition-colors"
            >
              Book now ↗
            </a>
          </div>
        )}
      </Section>

      {/* Rich content body */}
      {event.content && event.content.length > 0 && (
        <Section as="div" className="pt-0">
          <div className="prose prose-lg prose-headings:font-[family-name:var(--font-fraunces)] prose-headings:text-ink prose-p:text-ink-muted prose-p:font-light prose-a:text-brand prose-a:underline-offset-4 hover:prose-a:text-brand-deep prose-strong:text-ink max-w-none">
            <PortableText value={event.content as PortableTextBlock[]} />
          </div>
        </Section>
      )}

      {/* Page builder sections */}
      {event.pageBuilder && event.pageBuilder.length > 0 && (
        <PageBuilderPage page={event as unknown as GetEventQueryResult} />
      )}
    </div>
  )
}
