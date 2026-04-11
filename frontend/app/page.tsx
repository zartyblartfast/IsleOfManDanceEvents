import {CtaLink} from '@/app/components/CtaLink'

export default function Page() {
  return (
    <div className="relative">
      {/* Hero — CSS-only; swap in photography later */}
      <section className="relative hero-mesh hero-pattern overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="container relative px-4 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8 lg:max-w-4xl">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-brand">
              Isle of Man · Social dance
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] leading-[1.1] text-balance text-ink">
              Dance weekends and social dance events in the Isle of Man
            </h1>
            <p className="text-lg sm:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mx-auto text-pretty">
              Modern Jive, Tango and social dance in beautiful venues — bringing together local
              dancers and visitors from across the UK and Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4">
              <CtaLink href="/events">View events</CtaLink>
              <CtaLink href="/travel" variant="secondary">
                Travel information
              </CtaLink>
            </div>
          </div>

          {/* Photo placeholder — replace with &lt;Image /&gt; when you have assets */}
          <div className="mx-auto mt-16 max-w-4xl photo-placeholder aspect-[21/9] sm:aspect-[2.4/1] flex flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-brand/50">
              Photography
            </span>
            <p className="text-sm text-ink-muted/80 max-w-sm font-light italic">
              Venue and event photos will sit here — for now, enjoy the calm of an empty dance floor
              before the music starts.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-brand/10 bg-cream">
        <div className="container max-w-3xl px-4 py-16 sm:py-24 space-y-20 lg:max-w-4xl">
          <section className="space-y-4">
            <h2 className="text-3xl sm:text-4xl text-ink">Welcome to IoM Dance</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              IoM Dance is a new event website for social dance weekends and special events in the
              Isle of Man. The aim is to create enjoyable, well-organised events that combine
              dancing, beautiful locations and a friendly atmosphere.
            </p>
          </section>

          <section
            id="featured-event"
            className="scroll-mt-28 rounded-2xl border border-brand/15 bg-white p-8 sm:p-10 shadow-[var(--shadow-card)] ring-1 ring-brand/5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Featured
            </p>
            <h2 className="text-2xl sm:text-3xl text-ink mb-2">Port Erin Modern Jive &amp; Tango Weekend</h2>
            <p className="text-ink-muted font-light leading-relaxed mb-8 max-w-2xl">
              A planned weekend combining separate Modern Jive and Tango sessions, social dancing,
              travel advice and accommodation information in one of the Isle of Man&apos;s most scenic
              locations.
            </p>
            <CtaLink href="/events/port-erin-weekend">Event details</CtaLink>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl sm:text-4xl text-ink">Planning your visit</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              Travel advice, ferry options, accommodation ideas and local information will be
              provided to help dancers visit the Isle of Man with confidence.
            </p>
          </section>

          <section className="space-y-6 border-t border-brand/10 pt-16">
            <h2 className="text-3xl sm:text-4xl text-ink">Interested in taking part?</h2>
            <p className="text-lg text-ink-muted font-light leading-relaxed">
              Whether you are local to the Isle of Man or travelling from the UK or Ireland, we would
              love to hear from you.
            </p>
            <CtaLink href="/contact">Contact us</CtaLink>
          </section>
        </div>
      </div>
    </div>
  )
}
