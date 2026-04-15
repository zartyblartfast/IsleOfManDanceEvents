import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Homepage singleton — editable content for the landing page.
 */
export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    // ── Hero section ──────────────────────────────────
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      description: 'Small uppercase text above the headline, e.g. "Isle of Man · Social dance".',
      type: 'string',
      initialValue: 'Isle of Man · Social dance',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      description: 'Main headline over the hero image.',
      type: 'string',
      initialValue: 'Dance weekends & social events in the Isle of Man',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      description: 'Short paragraph below the headline.',
      type: 'text',
      rows: 3,
      initialValue:
        'Modern Jive, Tango and social dance in beautiful venues — bringing together local dancers and visitors from across the UK & Ireland.',
    }),
    defineField({
      name: 'heroPrimaryCta',
      title: 'Hero Primary Button',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', initialValue: 'View events'}),
        defineField({name: 'href', title: 'Link', type: 'string', initialValue: '/events'}),
      ],
    }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Hero Secondary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Travel information',
        }),
        defineField({name: 'href', title: 'Link', type: 'string', initialValue: '/travel'}),
      ],
    }),

    // ── Welcome section ───────────────────────────────
    defineField({
      name: 'welcomeHeading',
      title: 'Welcome Heading',
      type: 'string',
      initialValue: 'Welcome to IoM Dance',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'text',
      rows: 4,
      initialValue:
        'IoM Dance is a new event website for social dance weekends and special events in the Isle of Man. The aim is to create enjoyable, well-organised events that combine dancing, beautiful locations and a friendly atmosphere.',
    }),

    // ── Planning section ──────────────────────────────
    defineField({
      name: 'planningHeading',
      title: 'Planning Section Heading',
      type: 'string',
      initialValue: 'Planning your visit',
    }),
    defineField({
      name: 'planningText',
      title: 'Planning Section Text',
      type: 'text',
      rows: 4,
      initialValue:
        'Travel advice, ferry options, accommodation ideas and local information will be provided to help dancers visit the Isle of Man with confidence.',
    }),

    // ── CTA / Contact section ─────────────────────────
    defineField({
      name: 'ctaHeading',
      title: 'CTA Section Heading',
      type: 'string',
      initialValue: 'Interested in taking part?',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Section Text',
      type: 'text',
      rows: 3,
      initialValue:
        'Whether you are local to the Isle of Man or travelling from the UK or Ireland, we would love to hear from you.',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', initialValue: 'Contact us'}),
        defineField({name: 'href', title: 'Link', type: 'string', initialValue: '/contact'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
