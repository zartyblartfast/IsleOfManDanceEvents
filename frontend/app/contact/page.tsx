import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about Isle of Man dance weekends and social dance events.',
}

export default function ContactPage() {
  return (
    <div className="container max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
        We&apos;re setting up dedicated contact details for IoM Dance. In the meantime, please reach
        out through any channels we publish on the site or social media once they are listed.
      </p>
      <p className="text-gray-600 font-light leading-relaxed mb-10">
        Whether you are local or travelling from the UK or Ireland, we would love to hear from you.
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
