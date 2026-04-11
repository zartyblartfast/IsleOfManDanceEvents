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
    <div className="container max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">{title}</h1>
      {description ? (
        <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-2xl">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
