/**
 * Shared layout wrapper for page sections — enforces consistent container width,
 * vertical rhythm and readable column across all page-builder blocks and static pages.
 *
 * Usage:
 *   <Section>…content…</Section>
 *   <Section as="article" className="bg-white">…</Section>
 *   <Section narrow>…narrower column…</Section>
 */
type SectionProps = {
  children: React.ReactNode
  /** Extra Tailwind classes merged onto the outer element. */
  className?: string
  /** HTML element to render (default `section`). */
  as?: React.ElementType
  /** Use a narrower max-width (max-w-2xl) instead of the default (max-w-3xl / lg:max-w-4xl). */
  narrow?: boolean
}

export function Section({
  children,
  className,
  as: Tag = 'section',
  narrow = false,
}: SectionProps) {
  const width = narrow ? 'max-w-2xl' : 'max-w-3xl lg:max-w-4xl'
  return (
    <Tag
      className={[
        'container px-4 pt-16 pb-16 sm:pt-20 sm:pb-20',
        width,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
