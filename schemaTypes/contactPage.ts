import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      name: 'contactHeading',
      title: 'Contact Section Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'contactParagraphs',
      title: 'Contact Section Paragraphs',
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
      description: 'Choose the services displayed on the Contact page.',
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
      description: 'Controls the Contact page title and description used by search engines.',
    }),
  ],
})