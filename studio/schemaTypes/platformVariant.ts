import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'platformVariant', title: 'Platform variant', type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: r=>r.required() }), // e.g. "Windows"
    defineField({ name: 'os', type: 'string',
      options: { list: ['Windows','macOS','Linux','iOS','Android','Browser'] } }),
    defineField({ name: 'icon', type: 'image', options: {hotspot:true} }),
    defineField({ name: 'steps', type: 'array', of: [{type:'step'}], validation: r=>r.min(1) }),
  ],
  preview: { select: { title: 'label' } }
})
