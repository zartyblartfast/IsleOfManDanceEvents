import {CtaLink} from '@/app/components/CtaLink'

export default function Page() {
  return (
    <div className="relative">
      {/* Hero */}
      <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-28 text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance text-gray-900">
              Dance weekends and social dance events in the Isle of Man
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto text-pretty">
              Modern Jive, Tango and social dance events in beautiful Isle of Man venues — bringing
              together local dancers and visitors from across the UK and Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-2">
              <CtaLink href="/posts">View Events</CtaLink>
              <CtaLink href="/travel" variant="secondary">
                Travel Information
              </CtaLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white">
        <div className="container max-w-3xl px-4 py-16 sm:py-20 space-y-16">
          <section className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 not-prose mb-4">
              Welcome to IoM Dance
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              IoM Dance is a new event website for social dance weekends and special events in the
              Isle of Man. The aim is to create enjoyable, well-organised events that combine
              dancing, beautiful locations and a friendly atmosphere.
            </p>
          </section>

          <section
            id="featured-event"
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-8 sm:p-10 scroll-mt-28"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Featured Event
            </h2>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              Port Erin Modern Jive &amp; Tango Weekend
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              A planned weekend event combining separate Modern Jive and Tango sessions, social
              dancing, travel advice and accommodation information in one of the Isle of Man&apos;s
              most scenic locations.
            </p>
            <CtaLink href="/events/port-erin-weekend">Event Details</CtaLink>
          </section>

          <section className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 not-prose mb-4">
              Planning your visit
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Travel advice, ferry options, accommodation ideas and local information will be
              provided to help dancers visit the Isle of Man with confidence.
            </p>
          </section>

          <section className="prose prose-lg prose-gray max-w-none border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 not-prose mb-4">
              Interested in taking part?
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Whether you are local to the Isle of Man or travelling from the UK or Ireland, we
              would love to hear from you.
            </p>
            <CtaLink href="/contact">Contact Us</CtaLink>
          </section>
        </div>
      </div>
    </div>
  )
}
