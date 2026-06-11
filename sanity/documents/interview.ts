import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'interview',
  title: 'Interviews',
  type: 'document',
  fields: [
    defineField({
      name: 'intervieweeName',
      title: 'Interviewee Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'intervieweeName',
      },
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'quote',
      title: 'Featured Quote',
      type: 'text',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'soundCloudEmbed',
      title: 'SoundCloud Embed URL',
      type: 'url',
      description: 'Full SoundCloud track or playlist URL',
    }),
    defineField({
      name: 'interviewContent',
      title: 'Interview Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})
