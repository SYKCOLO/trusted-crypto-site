import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'platformSteps', title: 'Platform-specific steps', type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'variants', type: 'array', of: [{type:'platformVariant'}], validation: r=>r.min(2) }),
  ]
})
