import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
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
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      description: 'Add and arrange the main content sections for the About page.',
      of: [{type: 'contentSection'}],
    }),

    defineField({
      name: 'featureGridHeading',
      title: 'Feature Grid Heading',
      type: 'string',
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),

            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Magnifying Glass', value: 'magnifying-glass'},
                  {title: 'Crosshair', value: 'crosshair'},
                  {title: 'Gear Six', value: 'gear-six'},
                  {title: 'Chart Bar', value: 'chart-bar'},
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO & Search',
      type: 'seo',
      description: 'Controls the About page title and description used by search engines.',
    }),
  ],
})