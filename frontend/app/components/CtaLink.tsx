import Link from 'next/link'

export function CtaLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}) {
  const base =
    'inline-flex items-center justify-center rounded-full text-sm sm:text-base font-medium tracking-wide whitespace-nowrap transition-colors duration-200 py-3 px-6 sm:px-8 shadow-sm'
  const styles =
    variant === 'primary'
      ? 'bg-brand text-white hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
      : 'border-2 border-brand/25 bg-white/80 text-ink hover:border-brand/50 hover:bg-brand-subtle'
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}
