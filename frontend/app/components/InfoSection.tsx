import {type PortableTextBlock} from 'next-sanity'

import PortableText from '@/app/components/PortableText'
import {Section} from '@/app/components/Section'
import {InfoSection} from '@/sanity.types'

type InfoProps = {
  block: InfoSection
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageId: string
  pageType: string
}

export default function Info({block}: InfoProps) {
  return (
    <Section as="div">
      {block?.heading && <h2 className="text-2xl md:text-3xl lg:text-4xl">{block.heading}</h2>}
      {block?.subheading && (
        <span className="block mt-4 mb-8 text-lg uppercase font-light text-ink-muted">
          {block.subheading}
        </span>
      )}
      <div className="mt-4">
        {block?.content?.length && (
          <PortableText className="" value={block.content as PortableTextBlock[]} />
        )}
      </div>
    </Section>
  )
}
