import Link from 'next/link'
import {format, parseISO} from 'date-fns'

import {sanityFetch} from '@/sanity/lib/live'
import {allEventsQuery} from '@/sanity/lib/queries'
import {AllEventsQueryResult} from '@/sanity.types'
import {dataAttr} from '@/sanity/lib/utils'

/** Format a compact date range for cards. */
function formatRange(start?: string | null, end?: string | null) {
  if (!start) return null
  const s = format(parseISO(start), 'd MMM yyyy')
  if (!end) return s
  const e = format(parseISO(end), 'd MMM yyyy')
  return `${s} – ${e}`
}

const EventCard = ({event}: {event: AllEventsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, dateStart, dateEnd, venue, danceStyles, status} = event
  const dateRange = formatRange(dateStart, dateEnd)
  const isCancelled = status === 'cancelled'

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'event', path: 'title'}).toString()}
      key={_id}
      className="border border-brand/10 rounded-xl p-6 bg-white flex flex-col justify-between transition-all duration-200 hover:border-brand/25 hover:shadow-[var(--shadow-card)] relative"
    >
      <Link
        className="hover:text-brand text-ink underline decoration-brand/30 transition-colors"
        href={`/events/${slug}`}
      >
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3
          className={`text-2xl mb-2 font-[family-name:var(--font-fraunces)] font-semibold text-ink ${isCancelled ? 'line-through opacity-60' : ''}`}
        >
          {title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted mb-3">
          {dateRange && <span>{dateRange}</span>}
          {venue && <span>📍 {venue}</span>}
          {status && status !== 'confirmed' && (
            <span className="uppercase font-medium tracking-wider">{status.replace('-', ' ')}</span>
          )}
        </div>

        {danceStyles && danceStyles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {danceStyles.map((style) => (
              <span
                key={style}
                className="text-[11px] font-medium bg-brand/10 text-brand-deep rounded-full px-2.5 py-0.5"
              >
                {style}
              </span>
            ))}
          </div>
        )}

        {excerpt && (
          <p className="line-clamp-3 text-sm leading-6 text-ink-muted max-w-[70ch]">{excerpt}</p>
        )}
      </div>
    </article>
  )
}

export const AllEvents = async ({
  heading = 'Upcoming events',
  subHeading,
}: {
  heading?: string
  subHeading?: string
} = {}) => {
  const {data} = await sanityFetch({query: allEventsQuery})

  if (!data || data.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-3xl text-ink sm:text-4xl font-[family-name:var(--font-fraunces)] font-semibold">
        {heading}
      </h2>
      {subHeading && <p className="mt-2 text-lg leading-8 text-ink-muted font-light">{subHeading}</p>}
      <div className="pt-6 space-y-6">
        {data.map((event: AllEventsQueryResult[number]) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}
