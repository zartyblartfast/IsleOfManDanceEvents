import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {titleField, slugField, pageBuilderField} from '../helpers'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    titleField('name', 'Name'),
    slugField('name'),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'Optional body text shown directly below the heading. For richer layouts, use the Page Builder instead.',
      type: 'blockContent',
    }),
    pageBuilderField(),
  ],
})
