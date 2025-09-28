import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL', name: 'link', type: 'object',
            fields: [{ title: 'URL', name: 'href', type: 'url' }],
          },
        ],
      },
    }),

    // Inline image
    defineArrayMember({ type: 'image', options: {hotspot: true} }),

    // NEW: reusable guide blocks
    defineArrayMember({ type: 'callout' }),
    defineArrayMember({ type: 'steps' }),
    defineArrayMember({ type: 'prosCons' }),

    // NEW: Top10VPN-style platform tabs (Windows/macOS/etc.)
    defineArrayMember({ type: 'platformSteps' }),

    // NEW: FAQ block (list of faqItem)
    defineArrayMember({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      fields: [
        { name: 'items', type: 'array', of: [{type:'faqItem'}], validation: r=>r.min(1) }
      ],
      preview: { prepare: () => ({title: 'FAQ'}) }
    }),
  ],
})
