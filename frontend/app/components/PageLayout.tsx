/**
 * Shared layout for marketing-style pages (title, intro, optional children).
 */
export function PageLayout({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="border-t border-brand/5 bg-cream">
      <div className="container max-w-3xl px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4">{title}</h1>
        {description ? (
          <p className="text-lg text-ink-muted font-light leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>
        ) : null}
        <div className="prose prose-lg prose-headings:font-[family-name:var(--font-fraunces)] prose-headings:text-ink prose-p:text-ink-muted prose-p:font-light max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
