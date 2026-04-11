import Image from 'next/image'

/**
 * In-app brand mark: `public/images/IoMDance.png` (transparent PNG, no watermarks).
 * If you replace the file with different pixel dimensions, update `width` and `height` below.
 */
export function SiteLogo({
  className,
  sizes = '(max-width: 640px) 40px, 48px',
  priority,
}: {
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/images/IoMDance.png"
      alt="IoM Dance"
      width={1000}
      height={1000}
      className={['object-contain', className].filter(Boolean).join(' ')}
      sizes={sizes}
      priority={priority}
    />
  )
}
