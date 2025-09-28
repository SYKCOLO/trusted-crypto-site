import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'step', title: 'Step', type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Step title', type: 'string', validation: r=>r.required() }),
    defineField({ name: 'body',  title: 'Details', type: 'array', of: [{type:'block'}] }),
    defineField({ name: 'image', type: 'image', options: {hotspot:true} }),
  ]
})
