import Link from 'next/link'

import {SiteLogo} from '@/app/components/SiteLogo'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {linkResolver} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'

const linkClass =
  'text-cream/80 hover:text-white text-sm transition-colors duration-200 underline-offset-4 hover:underline'

/** Fallback nav used when settings.navigation is not yet configured. */
const defaultNav = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about'},
  {label: 'Events', href: '/events'},
  {label: 'Travel', href: '/travel'},
  {label: 'Accommodation', href: '/accommodation'},
  {label: 'Contact', href: '/contact'},
]

const defaultFooterText =
  'Social dance weekends and events — Modern Jive, Tango and more. All welcome, local or visiting from across the UK and Ireland.'

export default async function Footer() {
  const {data: settings} = await sanityFetch({query: settingsQuery})

  const siteTitle = settings?.title || 'IoM Dance'
  const footerText = settings?.footerText || defaultFooterText

  const cmsNav = settings?.navigation
  const hasCmsNav = cmsNav && cmsNav.length > 0

  const navItems = hasCmsNav
    ? cmsNav
        .map((item) => ({
          label: item.label ?? '',
          href: linkResolver(item.link as DereferencedLink) ?? '#',
        }))
        .filter((item) => item.label)
    : defaultNav

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-ink text-cream">
      <div
        className="absolute inset-0 opacity-[0.07] hero-pattern pointer-events-none"
        aria-hidden
      />
      <div className="container relative">
        <div className="flex flex-col items-center gap-10 py-16 sm:py-20 lg:flex-row lg:justify-between lg:items-start">
          <div className="text-center lg:text-left max-w-md space-y-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start lg:items-center">
              <SiteLogo
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
                sizes="64px"
              />
              <div className="space-y-3 min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Isle of Man</p>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight font-[family-name:var(--font-fraunces)] text-white">
                  {siteTitle}
                </h3>
              </div>
            </div>
            <p className="text-cream/75 font-light text-sm leading-relaxed">
              {footerText}
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-end text-sm"
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-center lg:text-left pb-8 text-xs text-cream/45">
          © {new Date().getFullYear()} {siteTitle} · Isle of Man
        </p>
      </div>
    </footer>
  )
}
