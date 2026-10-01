import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The page title shown in Google search results and browser tabs.',
      validation: (rule) =>
        rule.max(65).warning('Meta titles are usually best kept under about 60–65 characters.'),
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'The description that may appear below the page title in search results.',
      validation: (rule) =>
        rule.max(165).warning('Meta descriptions are usually best kept under about 155–165 characters.'),
    }),

    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image used when this page is shared on social media.',
    }),
  ],
})