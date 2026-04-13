import Link from 'next/link'
import {SiteLogo} from '@/app/components/SiteLogo'
import MobileNav from '@/app/components/MobileNav'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {linkResolver} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'

const navLinkClass =
  'text-ink/75 hover:text-brand font-medium text-sm transition-colors duration-200 hover:underline underline-offset-4 decoration-brand/40'

const ctaClass =
  'rounded-full inline-flex items-center bg-brand hover:bg-brand-deep py-2 px-3 sm:px-5 text-white text-sm font-medium shadow-sm transition-colors duration-200'

/** Fallback nav used when settings.navigation is not yet configured. */
const defaultNav = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about'},
  {label: 'Events', href: '/events'},
  {label: 'Travel', href: '/travel'},
  {label: 'Accommodation', href: '/accommodation'},
  {label: 'Contact', href: '/contact'},
]

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  const cmsNav = settings?.navigation
  const hasCmsNav = cmsNav && cmsNav.length > 0

  // Resolve CMS nav items to {label, href} pairs
  const navItems = hasCmsNav
    ? cmsNav
        .map((item) => ({
          label: item.label ?? '',
          href: linkResolver(item.link as DereferencedLink) ?? '#',
        }))
        .filter((item) => item.label)
    : defaultNav

  return (
    <header className="fixed z-50 h-20 sm:h-24 inset-0 flex items-center border-b border-brand/10 bg-cream/85 backdrop-blur-md">
      <div className="container py-4 sm:py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3 shrink-0 group"
            href="/"
          >
            <SiteLogo
              className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg shadow-sm ring-1 ring-brand/15 transition-transform duration-200 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 36px, 40px"
              priority
            />
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-ink font-[family-name:var(--font-fraunces)]">
              {settings?.title || 'IoM Dance'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden md:block">
            <ul
              role="list"
              className="flex items-center gap-x-4 text-sm"
            >
              {navItems.map((item, i) => {
                const isLast = i === navItems.length - 1
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={isLast ? ctaClass : navLinkClass}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile nav */}
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  )
}
