import {defineField, defineType} from 'sanity'

export const contentSectionType = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'lead',
      title: 'Lead Paragraph',
      type: 'text',
      rows: 3,
      description: 'Optional larger introductory paragraph.',
    }),

    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),

    defineField({
      name: 'showDeliverables',
      title: 'Show Services / Deliverables',
      type: 'boolean',
      description: 'Display this service’s deliverables in this section.',
      initialValue: false,
    }),

    defineField({
      name: 'closingText',
      title: 'Closing Paragraph',
      type: 'text',
      rows: 4,
      description: 'Optional paragraph displayed at the end of this section.',
    }),
  ],
})