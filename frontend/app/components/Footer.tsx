import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 relative border-t border-gray-100">
      <div className="absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-20 bg-position-[0_1]" />
      <div className="container relative">
        <div className="flex flex-col items-center gap-8 py-20 lg:flex-row lg:justify-between lg:items-start">
          <div className="text-center lg:text-left max-w-md">
            <h3 className="text-2xl font-mono leading-tight tracking-tighter text-gray-900 mb-3">
              IoM Dance
            </h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed">
              Social dance weekends and events in the Isle of Man — Modern Jive, Tango and more.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center font-mono text-sm text-gray-700">
            <Link href="/posts" className="hover:underline underline-offset-4">
              Events
            </Link>
            <Link href="/travel" className="hover:underline underline-offset-4">
              Travel
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
