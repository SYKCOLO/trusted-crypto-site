// studio/schemaTypes/objects/spacer.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'spacer',
  title: 'Spacer',
  type: 'object',
  // icon:  <-- intentionally omitted to avoid export errors
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: 'm',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'XS (8px)', value: 'xs'},
          {title: 'S (16px)', value: 's'},
          {title: 'M (24px)', value: 'm'},
          {title: 'L (40px)', value: 'l'},
          {title: 'XL (64px)', value: 'xl'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'divider',
      title: 'Show subtle divider line',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {size: 'size', divider: 'divider'},
    prepare({size = 'm', divider}) {
      const label = {xs: 'XS', s: 'S', m: 'M', l: 'L', xl: 'XL'}[size] || String(size)
      return {
        title: `Spacer — ${label}`,
        subtitle: divider ? 'With divider' : undefined,
      }
    },
  },
})
