import type {Metadata} from 'next'
import {type PortableTextBlock} from 'next-sanity'

import PageBuilderPage from '@/app/components/PageBuilder'
import PortableText from '@/app/components/PortableText'
import {Section} from '@/app/components/Section'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery, pagesSlugs} from '@/sanity/lib/queries'
import {GetPageQueryResult} from '@/sanity.types'
import {PageOnboarding} from '@/app/components/Onboarding'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    // // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  const [{data: page}] = await Promise.all([sanityFetch({query: getPageQuery, params})])

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    )
  }

  return (
    <div className="border-t border-brand/5 bg-cream">
      <Section as="div" className={page.pageBuilder?.length ? 'pb-0' : ''}>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4 font-[family-name:var(--font-fraunces)]">
          {page.heading}
        </h1>
        {page.subheading && (
          <p className="text-lg text-ink-muted font-light leading-relaxed">
            {page.subheading}
          </p>
        )}
        {page.content && page.content.length > 0 && (
          <div className="prose prose-lg prose-headings:font-[family-name:var(--font-fraunces)] prose-headings:text-ink prose-p:text-ink-muted prose-p:font-light prose-a:text-brand prose-a:underline-offset-4 hover:prose-a:text-brand-deep prose-strong:text-ink max-w-none mt-8">
            <PortableText value={page.content as PortableTextBlock[]} />
          </div>
        )}
      </Section>
      {page.pageBuilder && page.pageBuilder.length > 0 && (
        <PageBuilderPage page={page as GetPageQueryResult} />
      )}
    </div>
  )
}
