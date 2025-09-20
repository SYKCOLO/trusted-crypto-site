import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'exchange',
  title: 'Exchange',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: r => r.required()
    }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text' }),
    defineField({ name: 'websiteUrl', title: 'Website URL', type: 'url' }),
    defineField({
      name: 'tradingFees',
      title: 'Trading Fees (%)',
      type: 'object',
      fields: [
        { name: 'maker', title: 'Maker', type: 'number' },
        { name: 'taker', title: 'Taker', type: 'number' },
      ]
    }),
    defineField({ name: 'proofOfReserves', title: 'Proof of Reserves', type: 'boolean', initialValue: false }),
    defineField({
      name: 'scores',
      title: 'Scores (0–100)',
      type: 'object',
      fields: [
        { name: 'overall', title: 'Overall', type: 'number', validation: r => r.min(0).max(100) },
        { name: 'fees', title: 'Fees', type: 'number', validation: r => r.min(0).max(100) },
        { name: 'security', title: 'Security', type: 'number', validation: r => r.min(0).max(100) },
        { name: 'ux', title: 'UX', type: 'number', validation: r => r.min(0).max(100) },
      ]
    }),
    defineField({ name: 'pros', title: 'Pros', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cons', title: 'Cons', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'body', title: 'Review Body', type: 'blockContent' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime', initialValue: () => new Date().toISOString() }),
  ],
  preview: {
    select: { title: 'name', media: 'logo', subtitle: 'shortDescription' }
  }
})
