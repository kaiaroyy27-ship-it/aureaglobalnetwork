import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comingSoonProject',
  title: 'Coming Soon Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline/subtitle for the project',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'launchDate',
      title: 'Expected Launch Date',
      type: 'date',
    }),
    defineField({
      name: 'fullContent',
      title: 'Full Project Details',
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
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'The First Step', value: 'first-step' },
          { title: 'Walli for Women', value: 'walli-women' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Development', value: 'development' },
          { title: 'Beta', value: 'beta' },
          { title: 'Launch Ready', value: 'launch-ready' },
        ],
      },
    }),
  ],
})
