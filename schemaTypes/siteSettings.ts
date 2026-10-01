import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Primary Dave Palmer Marketing logo used throughout the website.',
    }),

    defineField({
      name: 'headerCtaText',
      title: 'Header CTA Text',
      type: 'string',
      description: 'Text displayed in the main header button.',
    }),

    defineField({
      name: 'headerCtaLink',
      title: 'Header CTA Link',
      type: 'string',
      description: 'Link used by the main header button.',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),

    defineField({
      name: 'footerHeading',
      title: 'Footer Heading',
      type: 'string',
    }),

    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Copyright text displayed in the footer.',
    }),

    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Default search information used when a page does not provide its own SEO settings.',
    }),

  ],
})