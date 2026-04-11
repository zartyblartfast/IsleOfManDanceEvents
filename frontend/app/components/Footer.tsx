import Link from 'next/link'

const link =
  'text-cream/80 hover:text-white text-sm transition-colors duration-200 underline-offset-4 hover:underline'

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 bg-ink text-cream">
      <div
        className="absolute inset-0 opacity-[0.07] hero-pattern pointer-events-none"
        aria-hidden
      />
      <div className="container relative">
        <div className="flex flex-col items-center gap-10 py-16 sm:py-20 lg:flex-row lg:justify-between lg:items-start">
          <div className="text-center lg:text-left max-w-md space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Isle of Man</p>
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight font-[family-name:var(--font-fraunces)] text-white">
              IoM Dance
            </h3>
            <p className="text-cream/75 font-light text-sm leading-relaxed">
              Social dance weekends and events — Modern Jive, Tango and more. All welcome, local or
              visiting from across the UK and Ireland.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-end text-sm"
          >
            <Link href="/" className={link}>
              Home
            </Link>
            <Link href="/about" className={link}>
              About
            </Link>
            <Link href="/events" className={link}>
              Events
            </Link>
            <Link href="/travel" className={link}>
              Travel
            </Link>
            <Link href="/accommodation" className={link}>
              Accommodation
            </Link>
            <Link href="/contact" className={link}>
              Contact
            </Link>
          </nav>
        </div>
        <p className="text-center lg:text-left pb-8 text-xs text-cream/45">
          © {new Date().getFullYear()} IoM Dance · Isle of Man
        </p>
      </div>
    </footer>
  )
}
