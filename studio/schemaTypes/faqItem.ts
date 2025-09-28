import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'faqItem', title: 'FAQ item', type: 'object',
  fields: [
    defineField({ name: 'q', title: 'Question', type: 'string', validation: r=>r.required() }),
    defineField({ name: 'a', title: 'Answer', type: 'array', of: [{type:'block'}] }),
  ],
  preview: { select: { title: 'q' } }
})
