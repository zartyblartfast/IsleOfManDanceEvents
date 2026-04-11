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
    'inline-flex items-center justify-center rounded-full font-mono text-sm sm:text-base whitespace-nowrap transition-colors duration-200 py-3 px-6 sm:py-3 sm:px-8'
  const styles =
    variant === 'primary'
      ? 'bg-black text-white hover:bg-blue focus:bg-blue'
      : 'border border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-50'
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}
