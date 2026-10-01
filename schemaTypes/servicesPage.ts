import {defineField, defineType} from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',

  fields: [
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
      name: 'contentHeading',
      title: 'Content Heading',
      type: 'string',
    }),

    defineField({
      name: 'contentLead',
      title: 'Content Lead',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'contentParagraphs',
      title: 'Content Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),

    defineField({
      name: 'servicesHeading',
      title: 'Services Heading',
      type: 'string',
      initialValue: 'SERVICES',
    }),

    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO & Search',
      type: 'seo',
    }),
  ],
})