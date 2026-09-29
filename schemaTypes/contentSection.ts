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
  name: 'contentType',
  title: 'Content Type',
  type: 'string',
  options: {
    list: [
      {title: 'Standard', value: 'standard'},
      {title: 'Rich Text', value: 'richText'},
    ],
    layout: 'radio',
  },
  initialValue: 'standard',
}),


    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 3}],
      hidden: ({parent}) => parent?.contentType === 'richText',
    }),

    
    defineField({
  name: 'items',
  title: 'List Items',
  type: 'array',
  of: [{type: 'string'}],
  description: 'Optional list displayed within this content section.',
  hidden: ({parent}) => parent?.contentType === 'richText',
}),

defineField({
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
            ],
          },
        ],
      },
    },
  ],
  hidden: ({parent}) => parent?.contentType !== 'richText',
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