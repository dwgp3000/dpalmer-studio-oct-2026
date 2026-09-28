import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL Path',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Used for service cards and other short summaries.',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
  name: 'heroContentPosition',
  title: 'Hero Content Position',
  type: 'string',
  description: 'Choose which side of the banner contains the headline and button.',
  options: {
    list: [
      {title: 'Left', value: 'left'},
      {title: 'Right', value: 'right'},
    ],
    layout: 'radio',
  },
  initialValue: 'right',
}),

    defineField({
      name: 'deliverables',
      title: 'Services / Deliverables',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'seo',
      title: 'SEO & Search',
      type: 'seo',
      description: 'Controls the page title and description used by search engines.',
    }),
  ],
})