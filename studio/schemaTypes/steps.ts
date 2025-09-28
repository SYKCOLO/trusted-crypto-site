import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'steps',
  title: 'Steps',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'step' }],   // uses your existing step.ts
      validation: r => r.min(1)
    }),
  ],
})
