import Link from 'next/link'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

const navLinkClass =
  'text-ink/75 hover:text-brand font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-brand/40'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <header className="fixed z-50 h-20 sm:h-24 inset-0 flex items-center border-b border-brand/10 bg-cream/85 backdrop-blur-md">
      <div className="container py-4 sm:py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex items-center gap-2 shrink-0 group"
            href="/"
          >
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-brand to-brand-muted group-hover:from-brand-muted group-hover:to-brand transition-colors" aria-hidden />
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-ink font-[family-name:var(--font-fraunces)]">
              {settings?.title || 'IoM Dance'}
            </span>
          </Link>

          <nav aria-label="Main">
            <ul
              role="list"
              className="flex flex-wrap items-center justify-end gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm"
            >
              <li>
                <Link href="/" className={navLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={navLinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className={navLinkClass}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/travel" className={navLinkClass}>
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className={navLinkClass}>
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-full inline-flex items-center bg-brand hover:bg-brand-deep py-2 px-3 sm:px-5 text-white text-sm font-medium shadow-sm transition-colors duration-200"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
