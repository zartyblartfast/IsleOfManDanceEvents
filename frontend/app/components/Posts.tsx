import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import Avatar from '@/app/components/Avatar'
import {dataAttr} from '@/sanity/lib/utils'

/** Empty CMS — keep server-only to avoid client bundles pulling `sanity/lib/api` (fragile on edge). */
function EmptyPostList() {
  return (
    <div
      className="rounded-2xl border border-dashed border-brand/25 bg-white/60 p-10 sm:p-12 text-center space-y-3 shadow-[var(--shadow-card)]"
      role="status"
    >
      <p className="text-ink font-medium font-[family-name:var(--font-fraunces)] text-lg">
        No events or updates yet
      </p>
      <p className="text-sm text-ink-muted font-light max-w-md mx-auto leading-relaxed">
        When posts are published in Sanity Studio, they will appear here. You can still browse
        other sections using the menu above.
      </p>
    </div>
  )
}

const Post = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author} = post

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      key={_id}
      className="border border-brand/10 rounded-xl p-6 bg-white flex flex-col justify-between transition-all duration-200 hover:border-brand/25 hover:shadow-[var(--shadow-card)] relative"
    >
      <Link className="hover:text-brand text-ink underline decoration-brand/30 transition-colors" href={`/posts/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-2xl mb-4 font-[family-name:var(--font-fraunces)] font-semibold text-ink">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-ink-muted max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand/10">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-ink-muted/80 text-xs tabular-nums" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl text-ink sm:text-4xl font-[family-name:var(--font-fraunces)] font-semibold">
        {heading}
      </h2>
    )}
    {subHeading && <p className="mt-2 text-lg leading-8 text-ink-muted font-light">{subHeading}</p>}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async ({
  heading = 'Recent posts',
  subHeading,
}: {
  heading?: string
  subHeading?: string
} = {}) => {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return null
  }

  const defaultSub =
    data.length === 1
      ? 'Published from Sanity Studio — more events and updates will appear here.'
      : `These ${data.length} entries are loaded from Sanity Studio.`

  return (
    <Posts heading={heading} subHeading={subHeading ?? defaultSub}>
      {data.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
