import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'prosCons', title: 'Pros & Cons', type: 'object',
  fields: [
    defineField({ name: 'pros', type: 'array', of: [{type:'string'}] }),
    defineField({ name: 'cons', type: 'array', of: [{type:'string'}] }),
  ]
})
