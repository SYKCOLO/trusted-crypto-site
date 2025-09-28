import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'callout', title: 'Callout', type: 'object',
  fields: [
    defineField({ name: 'tone', type: 'string', initialValue: 'note',
      options: { list: [{title:'Tip',value:'tip'},{title:'Warning',value:'warning'},{title:'Note',value:'note'}] }}),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'body',  type: 'array', of: [{type:'block'}] }),
  ],
  preview: { select: { title: 'title', subtitle: 'tone' } }
})
