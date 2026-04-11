import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Travel Information',
  description:
    'Travel advice, ferries and visiting the Isle of Man for dance weekends — content coming soon.',
}

export default function TravelPage() {
  return (
    <div className="container max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Travel Information</h1>
      <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
        Detailed travel advice, ferry options, accommodation ideas and local tips for visiting the
        Isle of Man will appear here. For now, see the overview on the{' '}
        <Link href="/" className="text-brand underline hover:text-gray-900 underline-offset-4">
          home page
        </Link>
        .
      </p>
      <Link
        href="/"
        className="inline-flex font-mono text-sm text-gray-700 hover:underline underline-offset-4"
      >
        ← Back to home
      </Link>
    </div>
  )
}
