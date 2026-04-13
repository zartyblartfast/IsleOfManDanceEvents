'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

type NavItem = {label: string; href: string}

const navLinkClass =
  'block text-ink/80 hover:text-brand font-medium text-base transition-colors duration-200'

const ctaClass =
  'rounded-full inline-flex items-center justify-center bg-brand hover:bg-brand-deep py-2.5 px-6 text-white text-base font-medium shadow-sm transition-colors duration-200 w-full text-center'

export default function MobileNav({navItems}: {navItems: NavItem[]}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-ink/70 hover:text-brand transition-colors"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out panel */}
      <nav
        className={[
          'fixed top-0 right-0 z-40 h-full w-72 bg-cream shadow-2xl',
          'transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 px-6 pt-24 pb-8">
          {navItems.map((item, i) => {
            const isLast = i === navItems.length - 1
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  isLast
                    ? `${ctaClass} mt-4`
                    : `${navLinkClass} py-3 border-b border-brand/10 ${isActive ? 'text-brand' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
