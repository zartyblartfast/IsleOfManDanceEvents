import {defineField} from 'sanity'

/**
 * Reusable field definitions shared across document schemas.
 * Using these helpers keeps field names, validation, and options consistent
 * so that GROQ queries and frontend types stay predictable.
 */

/** Required string title field. */
export const titleField = (name = 'title', title = 'Title') =>
  defineField({
    name,
    title,
    type: 'string',
    validation: (rule) => rule.required(),
  })

/**
 * Required slug field.
 * @param source - the field name the slug is auto-generated from (default 'title').
 */
export const slugField = (source = 'title') =>
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    description: 'Used in the page URL — auto-generated from the title.',
    options: {
      source,
      maxLength: 96,
      isUnique: (value, context) => context.defaultIsUnique(value, context),
    },
    validation: (rule) => rule.required(),
  })

/**
 * Image field with hotspot, AI-assisted alt text, and conditional alt validation.
 * The alt text is required whenever an image asset is present.
 */
export const imageWithAlt = (name = 'coverImage', title = 'Cover Image') =>
  defineField({
    name,
    title,
    type: 'image',
    options: {
      hotspot: true,
      aiAssist: {
        imageDescriptionField: 'alt',
      },
    },
    fields: [
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Important for SEO and accessibility.',
        validation: (rule) =>
          rule.custom((alt, context) => {
            // context.parent is the image object — check if an asset is selected
            const parent = context.parent as {asset?: {_ref?: string}} | undefined
            if (parent?.asset?._ref && !alt) {
              return 'Alt text is required when an image is set'
            }
            return true
          }),
      }),
    ],
  })

/** Short plain-text excerpt / summary. */
export const excerptField = () =>
  defineField({
    name: 'excerpt',
    title: 'Excerpt',
    type: 'text',
    description: 'A short summary shown on listing pages and in SEO metadata.',
  })

/**
 * Page-builder array field.
 * @param sectionTypes - the object type names editors can add (default: callToAction, infoSection).
 */
export const pageBuilderField = (
  sectionTypes: string[] = ['callToAction', 'infoSection'],
) =>
  defineField({
    name: 'pageBuilder',
    title: 'Page builder',
    type: 'array',
    of: sectionTypes.map((t) => ({type: t})),
    options: {
      insertMenu: {
        views: [
          {
            name: 'grid',
            previewImageUrl: (schemaTypeName: string) =>
              `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
          },
        ],
      },
    },
  })
