import {format, parseISO} from 'date-fns'
import Image from 'next/image'

import {CtaLink} from '@/app/components/CtaLink'
import {SiteLogo} from '@/app/components/SiteLogo'
import {Section} from '@/app/components/Section'
import {sanityFetch} from '@/sanity/lib/live'
import {homepageQuery, nextEventQuery} from '@/sanity/lib/queries'
import {NextEventQueryResult} from '@/sanity.types'

import heroImage from '@/public/images/IomDanceEvents_Hero_Image.jpg'

/** Renders the featured-event card when a next event exists in Sanity. */
function FeaturedEvent({event}: {event: NonNullable<NextEventQueryResult>}) {
  const dateLabel = event.dateStart
    ? format(parseISO(event.dateStart), 'd MMM yyyy')
    : null

  return (
    <section
      id="featured-event"
      className="scroll-mt-28 rounded-2xl border border-brand/15 bg-white p-8 sm:p-10 shadow-[var(--shadow-card)] ring-1 ring-brand/5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
        Featured event
      </p>
      <h2 className="text-2xl sm:text-3xl text-ink mb-2">{event.title}</h2>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted mb-4">
        {dateLabel && <span>{dateLabel}</span>}
        {event.venue && <span>📍 {event.venue}</span>}
      </div>
      {event.excerpt && (
        <p className="text-ink-muted font-light leading-relaxed mb-8 max-w-2xl">
          {event.excerpt}
        </p>
      )}
      <CtaLink href={`/events/${event.slug}`}>Event details</CtaLink>
    </section>
  )
}

export default async function Page() {
  const [{data: hp}, {data: nextEvent}] = await Promise.all([
    sanityFetch({query: homepageQuery}),
    sanityFetch({query: nextEventQuery}),
  ])

  // Fallbacks for when the Homepage singleton hasn't been published yet
  const heroTagline = hp?.heroTagline ?? 'Isle of Man · Social dance'
  const heroHeading = hp?.heroHeading ?? 'Dance weekends & social events in the Isle of Man'
  const heroDescription =
    hp?.heroDescription ??
    'Modern Jive, Tango and social dance in beautiful venues — bringing together local dancers and visitors from across the UK & Ireland.'
  const primaryCta = {
    label: hp?.heroPrimaryCta?.label ?? 'View events',
    href: hp?.heroPrimaryCta?.href ?? '/events',
  }
  const secondaryCta = {
    label: hp?.heroSecondaryCta?.label ?? 'Travel information',
    href: hp?.heroSecondaryCta?.href ?? '/travel',
  }
  const welcomeHeading = hp?.welcomeHeading ?? 'Welcome to IoM Dance'
  const welcomeText =
    hp?.welcomeText ??
    'IoM Dance is a new event website for social dance weekends and special events in the Isle of Man. The aim is to create enjoyable, well-organised events that combine dancing, beautiful locations and a friendly atmosphere.'
  const planningHeading = hp?.planningHeading ?? 'Planning your visit'
  const planningText =
    hp?.planningText ??
    'Travel advice, ferry options, accommodation ideas and local information will be provided to help dancers visit the Isle of Man with confidence.'
  const ctaHeading = hp?.ctaHeading ?? 'Interested in taking part?'
  const ctaText =
    hp?.ctaText ??
    'Whether you are local to the Isle of Man or travelling from the UK or Ireland, we would love to hear from you.'
  const ctaButton = {
    label: hp?.ctaButton?.label ?? 'Contact us',
    href: hp?.ctaButton?.href ?? '/contact',
  }

  return (
    <div className="relative">
      {/* Hero with background image */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src={heroImage}
          alt="Couples dancing at a social dance event with fairy lights and warm purple lighting"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlays for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/40 via-ink/30 to-ink/70"
          aria-hidden
        />
        <div
          className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink/80 to-transparent"
          aria-hidden
        />
        <div className="container relative px-4 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
            <div className="max-w-xl space-y-6 text-center lg:text-right">
              <div className="flex justify-center lg:justify-end">
                <SiteLogo
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl shadow-lg ring-1 ring-white/20"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-brand-muted">
                {heroTagline}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance text-white drop-shadow-lg">
                {heroHeading}
              </h1>
              <p className="text-base sm:text-lg text-cream/85 font-light leading-relaxed">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-stretch sm:items-center pt-2">
                <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>
                <CtaLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-brand/10 bg-cream">
        <Section as="div" className="space-y-20">
          <section className="space-y-4">
            <h2 className="text-3xl sm:text-4xl text-ink">{welcomeHeading}</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              {welcomeText}
            </p>
          </section>

          {nextEvent ? (
            <FeaturedEvent event={nextEvent} />
          ) : null}

          <section className="space-y-4">
            <h2 className="text-3xl sm:text-4xl text-ink">{planningHeading}</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              {planningText}
            </p>
          </section>

          <section className="space-y-6 border-t border-brand/10 pt-16">
            <h2 className="text-3xl sm:text-4xl text-ink">{ctaHeading}</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              {ctaText}
            </p>
            <CtaLink href={ctaButton.href}>{ctaButton.label}</CtaLink>
          </section>
        </Section>
      </div>
    </div>
  )
}
