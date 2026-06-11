import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'chapter',
  title: 'School Chapters',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Chapter Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'school',
      title: 'School/University Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location (City, State)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Chapter Description',
      type: 'text',
    }),
    defineField({
      name: 'chapterImage',
      title: 'Chapter Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'leaders',
      title: 'Chapter Leaders',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Leader Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'email',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'memberCount',
      title: 'Number of Members',
      type: 'number',
    }),
    defineField({
      name: 'foundedAt',
      title: 'Founded Date',
      type: 'datetime',
    }),
  ],
})
