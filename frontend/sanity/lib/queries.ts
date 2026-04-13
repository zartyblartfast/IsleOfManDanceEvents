import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  ...,
  navigation[]{
    ...,
    link {
      ...,
      "page": page->slug.current,
      "post": post->slug.current,
      "event": event->slug.current
    }
  }
}`)

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current,
    "event": event->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    content[]{
      ...,
      markDefs[]{
        ...,
        ${linkReference}
      }
    },
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`)

export const sitemapData = defineQuery(`
  *[(_type == "page" || _type == "post" || _type == "event") && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)

// ── Event queries ────────────────────────────────────────────

const eventFields = /* groq */ `
  _id,
  _type,
  "title": coalesce(title, "Untitled event"),
  "slug": slug.current,
  excerpt,
  coverImage,
  dateStart,
  dateEnd,
  venue,
  danceStyles,
  status,
  bookingUrl,
`

export const allEventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(dateStart asc) {
    ${eventFields}
  }
`)

export const getEventQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    ${eventFields}
    content[]{
      ...,
      markDefs[]{
        ...,
        ${linkReference}
      }
    },
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`)

export const eventsSlugs = defineQuery(`
  *[_type == "event" && defined(slug.current)]
  {"slug": slug.current}
`)

/** The next upcoming event (soonest dateStart that hasn't ended yet, excluding cancelled). */
export const nextEventQuery = defineQuery(`
  *[_type == "event" && defined(slug.current) && status != "cancelled" && dateStart >= now()] | order(dateStart asc) [0] {
    ${eventFields}
  }
`)
