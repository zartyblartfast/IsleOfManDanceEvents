import {CalendarIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'
import {titleField, slugField, imageWithAlt, excerptField, pageBuilderField} from '../helpers'

/**
 * Event schema — the core document type for dance weekends and socials.
 * Uses shared helpers for title, slug, image, excerpt and page-builder fields.
 */

export const event = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  groups: [
    {name: 'details', title: 'Details', default: true},
    {name: 'content', title: 'Content'},
    {name: 'media', title: 'Media'},
  ],
  fields: [
    // ── Details ──────────────────────────────────────────────
    {...titleField(), group: 'details'},
    {...slugField('title'), group: 'details'},
    {...excerptField(), group: 'details'},
    defineField({
      name: 'dateStart',
      title: 'Start date',
      type: 'datetime',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateEnd',
      title: 'End date',
      type: 'datetime',
      group: 'details',
      description: 'Leave empty for single-day events.',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      group: 'details',
      description: 'Venue name and/or location, e.g. "Bay Hotel, Port Erin".',
    }),
    defineField({
      name: 'danceStyles',
      title: 'Dance styles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      group: 'details',
      description: 'e.g. Modern Jive, Tango, Salsa.',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'details',
      initialValue: 'planned',
      options: {
        list: [
          {title: 'Planned', value: 'planned'},
          {title: 'Confirmed', value: 'confirmed'},
          {title: 'Sold out', value: 'sold-out'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      group: 'details',
      description: 'External ticketing or registration link (optional).',
    }),

    // ── Content ──────────────────────────────────────────────
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'content',
    }),
    {...pageBuilderField(), group: 'content'},

    // ── Media ────────────────────────────────────────────────
    {...imageWithAlt('coverImage', 'Cover Image'), group: 'media'},
  ],

  // List preview in Studio sidebar
  preview: {
    select: {
      title: 'title',
      dateStart: 'dateStart',
      venue: 'venue',
      status: 'status',
      media: 'coverImage',
    },
    prepare({title, dateStart, venue, status, media}) {
      const parts = [
        status && status !== 'confirmed' ? `[${status}]` : null,
        dateStart ? format(parseISO(dateStart), 'LLL d, yyyy') : null,
        venue,
      ].filter(Boolean)
      return {
        title: title || 'Untitled event',
        subtitle: parts.join(' · '),
        media,
      }
    },
  },

  // Default ordering: soonest first
  orderings: [
    {
      title: 'Start date (soonest first)',
      name: 'dateStartAsc',
      by: [{field: 'dateStart', direction: 'asc'}],
    },
    {
      title: 'Start date (latest first)',
      name: 'dateStartDesc',
      by: [{field: 'dateStart', direction: 'desc'}],
    },
  ],
})
