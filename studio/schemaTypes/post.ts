import {defineField, defineType} from 'sanity'

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required()
    }),

    // NEW: short summary for listings/SEO
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    }),

    // NEW: beginner/intermediate/advanced
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      initialValue: 'beginner',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ]
      }
    }),

    // NEW: read time in minutes
    defineField({
      name: 'duration',
      title: 'Read time (min)',
      type: 'number',
      validation: r => r.min(1).max(60)
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      difficulty: 'difficulty',
      duration: 'duration',
    },
    prepare(selection) {
      const {author, difficulty, duration} = selection
      const bits = [
        difficulty,
        duration ? `${duration} min` : null,
        author ? `by ${author}` : null
      ].filter(Boolean)
      return {...selection, subtitle: bits.join(' • ')}
    },
  },
})

export default post
