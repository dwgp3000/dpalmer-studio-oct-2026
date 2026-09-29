import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',

  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
  name: 'heroParagraphs',
  title: 'Hero Paragraphs',
  type: 'array',
  of: [{type: 'text', rows: 3}],
  description: 'Introductory paragraphs displayed in the home page hero.',
}),

    defineField({
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
    }),

    defineField({
      name: 'heroButtonLink',
      title: 'Hero Button Link',
      type: 'string',
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
  name: 'servicesHeading',
  title: 'Services Heading',
  type: 'string',
  initialValue: 'SERVICES',
}),

    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      description: 'Choose the services displayed on the home page.',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
    }),

    defineField({
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      description: 'Add and arrange the main content sections for the home page.',
      of: [{type: 'contentSection'}],
    }),

    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
    }),

    defineField({
      name: 'ctaParagraphs',
      title: 'CTA Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),

    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    }),

    defineField({
      name: 'seo',
      title: 'SEO & Search',
      type: 'seo',
      description: 'Controls the home page title and description used by search engines.',
    }),
  ],
})