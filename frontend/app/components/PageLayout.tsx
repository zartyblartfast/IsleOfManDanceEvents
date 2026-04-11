/**
 * Shared layout for marketing-style pages — matches the Events page shell (container + readable column).
 */
export function PageLayout({
  title,
  description,
  eyebrow,
  children,
}: {
  title: string
  description?: string
  /** Optional label above the title (same style as Events “What’s on”). */
  eyebrow?: string
  children?: React.ReactNode
}) {
  return (
    <div className="border-t border-brand/5 bg-cream">
      <div className="container px-4 py-16 sm:py-20">
        <div className="max-w-3xl mb-12 lg:max-w-4xl">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand mb-3">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4 font-[family-name:var(--font-fraunces)]">
            {title}
          </h1>
          {description ? (
            <p className="text-lg text-ink-muted font-light leading-relaxed">{description}</p>
          ) : null}
        </div>
        {children ? (
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="prose prose-lg prose-headings:font-[family-name:var(--font-fraunces)] prose-headings:text-ink prose-p:text-ink-muted prose-p:font-light prose-a:text-brand prose-a:underline-offset-4 hover:prose-a:text-brand-deep prose-strong:text-ink max-w-none">
              {children}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
